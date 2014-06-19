# 2014-06-19

Joanna has taken over from Claire as an RA for the SILC lab.  She's working with Raedy Ping and Naveen Khetarpal on a study focused on puzzle play.

See [request.md](request.md) for the full details of her current request.


## Files

Joanna sent the following files:

* [puzzle.tsv](data/puzzle.tsv) - puzzle transcripts
* [puzzle-15.tsv](data/puzzle-15.tsv) - puzzle transcripts cut at 15 min mark
* [puzzle-12.tsv](data/puzzle-15.tsv) - puzzle transcripts with experiementer
* [book.tsv](data/puzzle.tsv) - book transcripts
* [regex.tsv](regex.tsv) - word patterns to match

Both the `puzzle.tsv` and `puzzle-15.tsv` transcript files contain the following columns:

* `_ID` - subject ID
* `PUZZLE` - puzzle type (`24` or `48`)
* `BEGIN` - begin time
* `END` - end time
* `DURATION` - time interval
* `PARENT` - parent speech
* `CHILD` - child speech
* `NOTE` - commentary

The `puzzle-12.tsv` transcript file only contains the following columns:

* `_ID` - subject ID
* `PUZZLE` - puzzle type (`12`)
* `EXPERIMENTER` - parent speech
* `CHILD` - child speech

The `book.tsv` transcript file contains the following columns:

* `_ID` - subject ID
* `BOOK` - book type (`F` or `NF`)
* `BEGIN` - begin time
* `END` - end time
* `DURATION` - time interval
* `TIME` - ?
* `PARENT` - parent speech
* `CHILD` - child speech
* `PAGE` - page annotation

The `regex.txt` file contains a list of regular expressions to be used for
pattern "token" and "type" counts. Pattern token counts should be understood as number of pattern instances observed. Pattern type counts should be understood as the number of patterns used.  

Note that `regex.txt` now contains three columns:

* `PATTERN` - pattern to search for
* `SPATIAL` - indicating whether the pattern is spatial (`1`) or not (`0`)
* `CATEGORY` - category of the given pattern (e.g., 


# Requested reports

#### THIS STILL NEEDS TO BE REVISED ####

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
