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
pattern "token" and "type" counts. Pattern token counts should be understood as number of pattern instances observed. Pattern type counts should be understood as the number of patterns used.


# Requested reports

Generate both summary and pattern count reports for both transcript files (`puzzle.tsv` and `puzzle-15.tsv`).

The [summary]() report will contain the following columns:

* `_ID` - subject ID
* `SPEAKER` - speaker type (`C` or `P`)
* `PUZZLE` - puzzle type (`24` or `48`)
* `WORD_TYP` - number of word types used
* `WORD_TOK` - number of word tokens used
* `PATT_TYP` - number of specified patterns used
* `PATT_TOK` - number of specified pattern instances used

The [pattern]() report will contain the following columns:

* `PATTERN` - word/phrase pattern
* `_ID` - subject ID
* `SPEAKER` - speaker type (`C` or `P`)
* `PUZZLE` - puzzle type (`24` or `48`)
* `TOTAL` - number of instances
* `USED` - `1` if pattern was used, `0` otherwise
