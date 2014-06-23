# 2014-06-19

See [request.md](request.md) for the full details of Joanna's current report
requests.  This is a follow-up and extension of her [previous report
requests](https://github.com/joyrexus/silc/tree/master/reports/joanna/2014-02-28) from February 2014.

Joanna sent a follow-up email clarifying the expected report format for each request (see `email/request.md`).


## Files

Joanna sent the following transcipt files:

* [puzzle](reports/puzzle/data.tsv) - puzzle transcripts
* [puzzle-15](reports/puzzle-15/data.tsv) - puzzle transcripts cut at 15 min mark
* [puzzle-12](reports/puzzle-12/data.tsv) - puzzle transcripts with experiementer
* [book](reports/book/data.tsv) - book transcripts

Both the `puzzle.tsv` and `puzzle-15.tsv` transcript files contain the following columns:

* `_ID` - subject ID
* `KIND` - puzzle kind by piece count (`24` or `48`)
* `BEGIN` - begin time
* `END` - end time
* `DURATION` - time interval
* `PARENT` - parent speech
* `CHILD` - child speech
* `NOTE` - commentary

The `puzzle-12.tsv` transcript file only contains the following columns:

* `_ID` - subject ID
* `KIND` - puzzle kind by piece count (`12`)
* `EXPERIMENTER` - parent speech
* `CHILD` - child speech

The `book.tsv` transcript file contains the following columns:

* `_ID` - subject ID
* `KIND` - book kind (`F` for "fiction" or `NF` for "nonfiction")
* `BEGIN` - begin time
* `END` - end time
* `DURATION` - time interval
* `TIME` - ?
* `PARENT` - parent speech
* `CHILD` - child speech
* `PAGE` - page annotation


## Patterns

Joanna also sent a list of word/phrase patterns to match ([regex.tsv](regex.tsv)).

This pattern file contains a list of regular expressions to be used for pattern "token" and "type" counts. Pattern token counts should be understood as number of pattern instances observed. Pattern type counts should be understood as the number of patterns used.  

Note that `regex.tsv` now contains three columns:

* `PATTERN` - pattern to search for
* `SPATIAL` - indicating whether the pattern is spatial (`1`) or not (`0`)
* `CATEGORY` - category of the given pattern

See [categories.md](categories.md) for the full list of word/phrase categories.


## Reports

For each set of transcripts, Joanna is requesting three types of reports:

`summary.xls` - summary count reports
`pattern.xls` - pattern count reports
`pivot.xls` - pattern count reports in an alternate "pivoted" format
`utterances.xls` - list of utterances containing a pattern match

See the individual report directories (`reports/*`) for each transcript set for details on each report.
