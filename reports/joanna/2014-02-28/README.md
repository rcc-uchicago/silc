# 2014-02-28

Joanna has taken over from Claire as an RA for the SILC lab.  She's working with Raedy Ping and Naveen Khetarpal on a study focused on puzzle play.

Joanna sent the following files:

* [puzzle.tsv](data/puzzle.tsv) - puzzle transcripts
* [puzzle-15.tsv](data/puzzle-15.tsv) - puzzle transcripts cut at 15 min mark
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

Summary count reports for both transcript files (`puzzle.tsv` and `puzzle-15.tsv`):

* [summary.tsv](reports/summary.tsv) - based on `puzzle.tsv`
* [summary-15.tsv](reports/summary-15.tsv) - based on `puzzle-15.tsv`

The summary reports contain the following columns:

* `_ID` - subject ID
* `PUZZLE` - puzzle type (`24` or `48`)
* `SPEAKER` - speaker type (`C` or `P`)
* `WORD_TYP` - number of word types used
* `WORD_TOK` - number of word tokens used
* `PATT_TYP` - number of specified patterns used
* `PATT_TOK` - number of specified pattern instances used

Full pattern count reports for both transcript files (`puzzle.tsv` and `puzzle-15.tsv`):

* [pattern.tsv](reports/pattern.tsv) - based on `puzzle.tsv`
* [pattern-15.tsv](reports/pattern-15.tsv) - based on `puzzle-15.tsv`

The pattern reports will contain the following columns:

* `_ID` - subject ID
* `PUZZLE` - puzzle type (`24` or `48`)
* `SPEAKER` - speaker type (`C` or `P`)
* `MATCH` - word/phrase pattern
* `TOTAL` - number of instances

We've also generated the pattern count reports in an alternate "pivoted"
format:

* [pivot.tsv](reports/pivot.tsv) - based on `puzzle.tsv`
* [pivot-15.tsv](reports/pivot-15.tsv) - based on `puzzle-15.tsv`

The pivot reports contain the following columns:

* `PATTERN` - word/phrase pattern
* **ID COLUMNS** - the remaining columns are tuple identifiers consisting of
  **id**, **puzzle**, **speaker** (e.g., `1-24-C` indicating subject/family
  `1`, puzzle `24`, and the child speaker).
