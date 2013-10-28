DEPLOY_DIR = $(WEBDOCS)/SILC/task/rotation/one-finger

.PHONY: build deploy

SOURCES := $(wildcard src/*.coffee)

build: $(SOURCES)
	coffee -co lib/ src/
	@echo "coffee sources were compiled"

FILES = index.html css lib images app.manifest apple-touch-icon.png

deploy: build $(FILES)
	rsync -r --exclude=.svn $(FILES) $(DEPLOY_DIR)
	@echo "files copied to $(DEPLOY_DIR)"

