from nlp import Words
from nlp import Tokenizer

words = Words('words.txt')
tokenize = Tokenizer()

utts = (u.rstrip() for u in open('data.tsv'))

def pprint(*args):
    '''Pretty-print args.'''
    print "\t".join(str(x) for x in args)

pprint(*'Subject Puzzle Line Speaker Word Utterance'.split(" ")) # header

for i, row in enumerate(utts):
    if not row or i is 0: continue
    subj, puzzle, c, p = (row.split('\t') + [_ for _ in '\t\t\t'])[:4]
    for spkr, utt in [("C", c), ("P", p)]:
        for tok in tokenize(utt.lower()):
            if tok in words:
                pprint(subj, puzzle, i, spkr, tok, utt)
