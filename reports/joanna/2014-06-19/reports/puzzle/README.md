# 2014-06-23 

This directory contains files relating to the `puzzle` transcripts.

This is part of a follow-up and extension of a [previous set of SILC report
requests](https://github.com/joyrexus/silc/tree/master/reports/joanna/2014-02-28) from February 2014.


## Files

* [data.tsv](data.tsv) - full puzzle transcripts
* [query.py](query.py) - python script used to generate reports
* [regex.txt](../../regex.txt) - pattern file

The transcript file (`data.tsv`) contains the following columns:

* `_ID` - subject ID
* `KIND` - puzzle kind by piece count (`24` or `48`)
* `BEGIN` - begin time
* `END` - end time
* `DURATION` - time interval
* `PARENT` - parent speech
* `CHILD` - child speech
* `NOTE` - commentary

The pattern file (`regex.txt`) contains a list of regular expressions to be used for pattern "token" and "type" counts. Pattern token counts should be understood as number of pattern instances observed. Pattern type counts should be understood as the number of patterns used.  

Note that `regex.txt` now contains an additional `CATEGORY` column:

* `PATTERN` - pattern to search for
* `SPATIAL` - indicating whether the pattern is spatial (`1`) or not (`0`)
* `CATEGORY` - category of the given pattern (e.g., 


# Reports

## [`pattern.tsv`](pattern.tsv)

The pattern count report contains the following columns:

* `_ID` - subject ID (`1` to `114`)
* `KIND` - puzzle kind by piece count (`24` or `48`)
* `SPEAKER` - speaker type (`C` or `P`)
* `MATCH` - word/phrase pattern
* `SPATIAL` - spatial status (`1` if spatial, `0` otherwise)
* `CATEGORY` - word/phrase category
* `TOTAL` - number of instances of word/phrase


## [`pivot.tsv`](pivot.tsv)

We've also generated a pattern count report in an alternate "pivoted"
format.  This report contains the following columns:

* `PATTERN` - word/phrase pattern
* `SPATIAL` - spatial status (`1` if spatial, `0` otherwise)
* `CATEGORY` - word/phrase category
* **ID COLUMNS** - the remaining columns are tuple identifiers consisting of
  **id**, **puzzle**, **speaker** (e.g., `1-24-C` indicating subject/family
  `1`, puzzle `24`, and the child speaker).


## [`summary.tsv`](summary.tsv)

The summary count report contains the following columns:

* `_ID` - subject ID
* `KIND` - puzzle kind by piece count (`24` or `48`)
* `SPEAKER` - speaker type (`C` or `P`)
* `WORD_TYP` - number of word types used
* `WORD_TOK` - number of word tokens used
* `PATT_TYP` - number of specified patterns used
* `PATT_TOK` - number of specified pattern instances used

The remaining columns are breakdowns of the various patterns observed:

* `SPATIAL_TYP` - number of spatial patterns used
* `SPATIAL_TOK` - number of spatial pattern instances used
* `NONSPATIAL_TYP` - number of non-spatial patterns used
* `NONSPATIAL_TOK` - number of non-spatial pattern instances used
* `SD_TYP` - Spatial Dimension types
* `SD_TOK` - Spatial Dimension tokens
* `SHAPE_TYP` - Shape types
* `SHAPE_TOK` - Shape tokens
* `LD_TYP` - Location and Direction types
* `LD_TOK` - Location and Direction tokens
* `CA_TYP` - Continuous Amount types
* `CA_TOK` - Continuous Amount tokens
* `SF_TYP` - Spatial Features and Properties types
* `SF_TOK` - Spatial Features and Properties tokens
* `OT_TYP` - Orientation and Transformation types
* `OT_TOK` - Orientation and Transformation tokens
* `AN_TYP` - Animal Name types
* `AN_TOK` - Animal Name tokens
* `NATURE_TYP` - Nature types
* `NATURE_TOK` - Nature tokens
* `BP_TYP` - Body Part types
* `BP_TOK` - Body Part tokens
* `COLOR_TYP` - Color types
* `COLOR_TOK` - Color tokens
* `ADJ_TYP` - Adjective types
* `ADJ_TOK` - Adjective tokens
* `Q_TYP` - Question types
* `Q_TOK` - Question tokens


## [`utterances.tsv`](utterances.tsv)

The utterances report contains lists of utterances matching one of the
patterns in `regex.txt`.  It contains the following columns:

* `_ID` - subject ID
* `KIND` - puzzle kind by piece count (`24` or `48`)
* `SPEAKER` - speaker type (`C` or `P`)
* `TIME` - timestamp
* `MATCH` - the matched word/phrase
* `SPATIAL` - spatial status of matched pattern
* `CATEGORY` - category of matched pattern
* `UTTERANCE` - the utterance containing the matched pattern
