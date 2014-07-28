# 2014-06-23 

This directory contains files relating to the `book` transcripts.

This is part of a follow-up and extension of a [previous set of SILC report
requests](https://github.com/joyrexus/silc/tree/master/reports/joanna/2014-02-28) from February 2014.


## Files

* [data.tsv](data.tsv) - book transcripts
* [query.py](query.py) - query script used to generate reports
* [regex.tsv](../../regex.tsv) - pattern file

The transcript file (`data.tsv`) contains the following columns:

* `_ID` - subject ID
* `KIND` - book type (`F` or `NF`)
* `BEGIN` - begin time
* `END` - end time
* `DURATION` - time interval
* `PARENT` - parent speech
* `CHILD` - child speech

The pattern file (`regex.tsv`) contains a list of regular expressions to be used for pattern "token" and "type" counts. Pattern token counts should be understood as number of pattern instances observed. Pattern type counts should be understood as the number of patterns used.  

Note that `regex.tsv` now contains an additional `CATEGORY` column:

* `PATTERN` - pattern to search for
* `SPATIAL` - indicating whether the pattern is spatial (`1`) or not (`0`)
* `CATEGORY` - category of the given pattern (e.g., 


## Reports

### [`pattern.tsv`](output/pattern.tsv)

The pattern count report contains the following columns:

* `_ID` - subject ID (`1` to `114`)
* `KIND` - book kind (`F` for "fiction" or `NF` for "nonfiction")
* `SPEAKER` - speaker type (`C` or `P`)
* `MATCH` - word/phrase pattern
* `SPATIAL` - spatial status (`1` if spatial, `0` otherwise)
* `CATEGORY` - word/phrase category
* `TOTAL` - number of instances of word/phrase


### [`pivot.tsv`](output/pivot.tsv)

We've also generated a pattern count report in an alternate "pivoted"
format.  This report contains the following columns:

* `PATTERN` - word/phrase pattern
* `SPATIAL` - spatial status (`1` if spatial, `0` otherwise)
* `CATEGORY` - word/phrase category
* **ID COLUMNS** - the remaining columns are tuple identifiers consisting of
  **id**, **kind**, **speaker** (e.g., `1-F-C` indicating subject/family
  `1`, a fiction book, and the child speaker).


### [`summary.tsv`](output/summary.tsv)

The summary count report contains the following columns:

* `_ID` - subject ID
* `KIND` - book kind (`F` or `NF`)
* `SPEAKER` - speaker type (`C` or `P`)
* `WORD_TYP` - number of word types used
* `WORD_TOK` - number of word tokens used
* `PATT_TYP` - number of specified patterns used
* `PATT_TOK` - number of specified pattern instances used
* `SPA_TYP` - number of specified patterns used that were spatial
* `SPA_TOK` - number of specified pattern instances that were spatial

The remaining columns are breakdowns of the various patterns observed:

* `SD_TYP` - spatial dimension types
* `SD_TOK` - spatial dimension tokens
* `SHA_TYP` - shapes types
* `SHA_TOK` - shapes tokens
* `LD_TYP` - location and direction types
* `LD_TOK` - location and direction tokens
* `CA_TYP` - continuous amount types
* `CA_TOK` - continuous amount tokens
* `SF_TYP` - spatial features and properties types
* `SF_TOK` - spatial features and properties tokens
* `OT_TYP` - orientation and transformation types
* `OT_TOK` - orientation and transformation tokens
* `ANI_TYP` - animal name types
* `ANI_TOK` - animal name tokens
* `NAT_TYP` - nature types
* `NAT_TOK` - nature tokens
* `BP_TYP` - body part types
* `BP_TOK` - body part tokens
* `COL_TYP` - color types
* `COL_TOK` - color tokens
* `ADJ_TYP` - adjective types
* `ADJ_TOK` - adjective tokens
* `Q_TYP` - question types
* `Q_TOK` - question tokens


### `matches.xls`

The matches report contains lists of utterances matching one of the
patterns in `regex.tsv`.  It contains the following columns:

* `_ID` - subject ID
* `KIND` - book kind (`F` or `NF`)
* `SPEAKER` - speaker type (`C` or `P`)
* `TIME` - timestamp
* `MATCH` - the matched word/phrase
* `SPATIAL` - spatial status of matched pattern
* `CATEGORY` - category of matched pattern
* `UTTERANCE` - the utterance containing the matched pattern
