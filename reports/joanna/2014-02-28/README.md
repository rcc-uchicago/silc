# 2014-02-28

Joanna has taken over from Claire as an RA for the SILC lab.  She's working with Raedy Ping and Naveen Khetarpal on a study focused on puzzle play.

Joanna sent the following files:

* [puzzle.tsv](puzzle.tsv) - puzzle transcripts
* [puzzle-15.tsv](puzzle-15.tsv) - puzzle transcripts cut at 15 min mark
* [regex.txt](regex.txt) - regular expressions to match

The two transcript files contain the following columns:

* `_ID` - subject ID
* `PUZZLE` - puzzle type (`24` or `48`)
* `BEGIN` - begin time
* `END` - end time
* `DURATION` - time interval
* `PARENT` - parent speech
* `CHILD` - child speech
* `NOTE` - commentary

The `regex.txt` file contains a list of regular expressions to be used for
"token" and "type" counts. Token counts should be understood as number of
pattern instances observed. Type counts should be understood as the number of
patterns used.


# Requested reports

Generate both summary and pattern reports for both transcript files (`puzzle.tsv` and `puzzle-15.tsv`).

The [summary]() report will contain the following columns:

* `_ID` - subject ID
* `SPEAKER` - speaker type (`C` or `P`)
* `PUZZLE` - puzzle type (`24` or `48`)
* `TYPES` - number of specified patterns used
* `TOKENS` - number of specified pattern instances used

The [pattern]() report will contain the following columns:

* `PATTERN` - word/phrase pattern
* `_ID` - subject ID
* `SPEAKER` - speaker type (`C` or `P`)
* `PUZZLE` - puzzle type (`24` or `48`)
* `TOTAL` - number of instances
* `USED` - `1` if pattern was used, `0` otherwise


## Joanna's email

I have taken over for Claire as the RA working on the lab study about puzzle play with Raedy and Naveen. You did some analysis on our transcripts about a year ago. We were hoping you would be able to get some new counts for us. I have attached two transcript files. One has the entire puzzle transcripts and one has 15 minute puzzle transcripts. Could you please find counts for both of these files separately? I also attached a file with our word list. Before you find the counts, could you exclude all text that is in between "* *"? I do not think this is something you have done for this study in the past and if that will be overly complicated, please let me know and we can figure something else out. 

In each file, the first column marks the subject number. The second column marks the task that was being worked on (either 24 or 48 piece puzzle). 

We would like to get total tokens per speaker/per puzzle. So for subject number 10 we would like total word counts for 10_Child_24, 10_Child_48, 10_Parent_24, and 10_Parent_48. 

In addition, is it possible to get total types per speaker/per puzzle? It seems like this might be incredibly complicated, but we thought you might have done it in the past. Ideally, we would want different versions of a word (big, bigger, biggest) to be counted as one type. 

Finally, we would like each subject to have two rows, the first would show their totals for the 24 piece puzzle, the second would show their totals for the 48 piece puzzle. Also, each word in the list would have 4 columns associated with it. The columns would be as follows:

[Word]ChildTokens: count of times the child said [Word]

[Word]Parent1Tokens: count of times Parent 1 said [Word]

[Word]ChildTypes: if the child said [Word] at least 1 time, this will = 1, else = 0

[Word]Parent1Types: if Parent 1 said [Word] at least 1 time, this will = 1, else = 0
