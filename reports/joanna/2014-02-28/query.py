import re
from collections import defaultdict
from nlp import Normalizer

limit = 100                                     # break after n lines
parse = Normalizer()                            # parse utterances
words = defaultdict(lambda: defaultdict(int))   # store word counts
match = defaultdict(lambda: defaultdict(int))   # store pattern counts
token_totals = defaultdict(int)                 # store word token totals
match_totals = defaultdict(int)                 # store pattern token totals
baseform = defaultdict()                        # use pattern variant as key
baseforms = []                                  # store each pattern base form
patterns = []                                   # patterns to search for


# use regex list to generate list of all patterns and variant forms
for rgx in open('regex.txt'):
    p = rgx.rstrip()
    patterns.append(p)
    variants = p.split('|')
    base = variants[0]          # first variant is used as base form
    baseforms.append(base)      # add to list of base forms
    for v in variants:          # assign each variant a base form
        baseform[v] = base

combined = '|'.join(patterns)
master_pattern = r'\b(' + combined + r')\b'
regex = re.compile(master_pattern)              # regex of all patterns

def parse_file(filename='data/puzzle.tsv', limit=None):
    file = open(filename)
    header = file.readline()

    for i, line in enumerate(file):
        fields = line.split('\t')
        id, puzzle, P, C =  fields[0:2] + fields[5:7]
        for (spkr, utt) in [('P', P), ('C', C)]:
            matches = regex.findall(utt)
            for m in matches:
                lemma = baseform[m]
                match_totals[id, puzzle, spkr] += 1
                match[id, puzzle, spkr][lemma] += 1
            for token in parse(utt.lower()):
                token_totals[id, puzzle, spkr] += 1
                words[id, puzzle, spkr][token] += 1
        if limit and i > limit: break

def pprint(*args):
    print "\t".join(str(x) for x in args)

def summary_report():
    columns = '_ID PUZZLE SPEAKER WORD_TYP WORD_TOK PATT_TYP PATT_TOK'.split(' ')
    pprint(*columns)
    for key, counts in sorted(words.items()):
        id, puzzle, spkr = key
        WTYP = len(counts.keys())
        WTOK = token_totals[key]
        PTYP = len(match.keys())
        PTOK = match_totals[key]
        pprint(id, puzzle, spkr, WTYP, WTOK, PTYP, PTOK)
        
def pattern_report():
    columns = '_ID PUZZLE SPEAKER MATCH COUNT'.split(' ')
    pprint(*columns)
    for key, counts in sorted(match.items()):
        id, puzzle, spkr = key
        for pattern, count in sorted(counts.items()):
            pprint(id, puzzle, spkr, pattern, count)
        
# alternate format for pattern count reporting
def pivot_report():
    ids = sorted(match.keys())
    id_strings = ['-'.join(id) for id in ids]
    pprint('PATTERN', *id_strings)
    for word in sorted(baseforms):
        results = [match[id].get(word, 0) for id in ids]
        pprint(word, *results)
        
parse_file('data/puzzle-15.tsv')

# choose which report to generate after parsing data file
summary_report()
print '------'
pattern_report()
print '------'
pivot_report()
