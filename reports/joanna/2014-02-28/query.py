import re
from collections import defaultdict
from nlp import Normalizer

parse = Normalizer()
words = defaultdict(lambda: defaultdict(int))
match = defaultdict(lambda: defaultdict(int))   # pattern matches
token_counts = defaultdict(int)
match_counts = defaultdict(int)
baseform = defaultdict()
patterns = []

for rgx in open('regex.txt'):
    p = rgx.rstrip()
    patterns.append(p)
    variants = p.split('|')
    lemma = variants[0]
    for v in variants:
        baseform[v] = lemma

all_patterns = '|'.join(patterns)
regex = re.compile(r"\b(" + all_patterns + r")\b")

file = open('data/puzzle-15.tsv')
header = file.readline()

for line in file:
    fields = line.split('\t')
    id, puzzle, P, C =  fields[0:2] + fields[5:7]
    for (spkr, utt) in [('P', P), ('C', C)]:
        matches = regex.findall(utt)
        for m in matches:
            lemma = baseform[m]
            match_counts[id, puzzle, spkr] += 1
            match[id, puzzle, spkr][lemma] += 1
        for token in parse(utt.lower()):
            token_counts[id, puzzle, spkr] += 1
            words[id, puzzle, spkr][token] += 1

def pprint(*args):
    print "\t".join(str(x) for x in args)

columns = '_ID SPEAKER PUZZLE WORD_TYP WORD_TOK PATT_TYP PATT_TOK'.split(' ')
pprint(*columns)

for key, counts in sorted(words.items()):
    id, puzzle, spkr = key
    WTYP = len(counts.keys())
    WTOK = token_counts[key]
    PTYP = len(match.keys())
    PTOK = match_counts[key]
    pprint(id, puzzle, spkr, WTYP, WTOK, PTYP, PTOK)
    
