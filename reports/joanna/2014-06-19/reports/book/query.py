import re
from collections import defaultdict as dd
from util.list import stretch
from nlp import Normalizer


parse = Normalizer()                    # parse utterances
words = dd(lambda: dd(int))             # store word type counts
match = dd(lambda: dd(int))             # store pattern type counts
space = dd(lambda: dd(int))             # store spatial type counts
group = dd(lambda: dd(lambda: dd(int))) # store subgroup type counts
token_totals = dd(int)                  # store word token totals
match_totals = dd(int)                  # store pattern token totals
space_totals = dd(int)                  # store spatial token totals
group_totals = dd(lambda: dd(int))      # store word subgroup token totals

# using pattern variant as key ...
baseform = dd()                    # store variant's baseform
is_spatial = dd(int)               # store variant's spatial status
category = dd()                    # store variant's category

baseforms = []                              # store each pattern base form
patterns = []                               # patterns to search for

# use regex list to generate list of all patterns and variant forms
for line in open('../../regex.tsv'):
    if line.startswith('PATTERN'): 
        continue                            # skip header line
    line = line.rstrip()
    (pat, sps, cat) = line.split('\t')      # pattern, spatial_status, category
    patterns.append(pat)
    variants = pat.split('|')
    base = variants[0]          # first variant is used as base form
    baseforms.append(base)      # add to list of base forms
    for v in variants:          # for each variant track ...
        baseform[v] = base          #   base form / lemma
        is_spatial[v] = int(sps)    #   spatial status
        category[v] = cat           #   pattern category

combined = '|'.join(patterns)
master_pattern = r'\b(' + combined + r')\b'
regex = re.compile(master_pattern)              # regex of all patterns


def parse_file(filename='data.tsv', limit=10, print_matches=False):
    file = open(filename)
    header = file.readline()

    for i, line in enumerate(file):
        fields = stretch(line.rstrip().split('\t'), 8)   # at least 7 fields
        id, puzzle, time, P, C =  fields[0:3] + fields[6:8]
        for (spkr, utt) in [('P', P), ('C', C)]:
            matches = regex.findall(utt.lower())
            key = (id, puzzle.upper(), spkr)
            for m in matches:
                base = baseform[m]                  # baseform of match
                cat = category[m]                   # category of match
                match_totals[key] += 1              # pattern tokens
                match[key][base] += 1               # pattern types
                group_totals[key][cat] += 1         # group/cat tokens
                group[key][cat][base] += 1          # group/cat types
                if is_spatial[m]:
                    space_totals[key] += 1          # spatial tokens
                    space[key][base] += 1           # spatial types
                if print_matches:
                    pprint(id, puzzle, spkr, time, m, is_spatial[m], cat, utt)
            for token in parse(utt.lower()):
                token_totals[key] += 1
                words[key][token] += 1
        if limit and i > limit: break


def pprint(*args):
    print "\t".join(str(x) for x in args)

categories = '''
spatial dimension
shapes
location and directions
continuous amount
spatial features and properties
orientation and transformation
animal name
nature
body part
color
adjective
question
'''

header = '''
_ID
KIND
SPEAKER
WORD_TYP
WORD_TOK
PATT_TYP
PATT_TOK
SPA_TYP
SPA_TOK
SD_TYP
SD_TOK
SHA_TYP
SHA_TOK
LD_TYP
LD_TOK
CA_TYP
CA_TOK
SF_TYP
SF_TOK
OT_TYP
OT_TOK
ANI_TYP
ANI_TOK
NAT_TYP
NAT_TOK
BP_TYP
BP_TOK
COL_TYP
COL_TOK
ADJ_TYP
ADJ_TOK
Q_TYP
Q_TOK
'''

def summary_report():
    columns = '_ID KIND SPEAKER' 
    pprint(*header.strip().split('\n'))
    for key, counts in sorted(words.items()):
        id, puzzle, spkr = key
        WTYP = len(counts.keys())
        WTOK = token_totals[key]
        PTYP = len(match[key].keys())
        PTOK = match_totals[key]
        STYP = len(space[key].keys())
        STOK = space_totals[key]
        results = [WTYP, WTOK, PTYP, PTOK, STYP, STOK]
        for cat in categories.strip().split('\n'):
            TYP = len(group[key][cat].keys())
            TOK = group_totals[key][cat]
            results.extend([TYP, TOK])
        pprint(id, puzzle, spkr, *results)
        
def pattern_report():
    columns = '_ID KIND SPEAKER MATCH SPATIAL CATEGORY COUNT'.split(' ')
    pprint(*columns)
    for key, counts in sorted(match.items()):
        id, puzzle, spkr = key
        for pat, count in sorted(counts.items()):
            pprint(id, puzzle, spkr, pat, is_spatial[pat], category[pat], count)
        
# alternate format for pattern count reporting
def pivot_report():
    ids = sorted(match.keys())
    id_strings = ['-'.join(id) for id in ids]
    pprint('PATTERN', 'SPATIAL', 'CATEGORY', *id_strings)
    for word in sorted(baseforms):
        results = [match[id].get(word, 0) for id in ids]
        pprint(word, is_spatial[word], category[word], *results)
        
parse_file('data.tsv', limit='', print_matches=False)

# choose which report to generate after parsing data file
# summary_report()
# print '------'
# pattern_report()
# print '------'
pivot_report()
