DEPLOY_DIR = $(WEBDOCS)/SILC/task/rotation/click

SITE_DIR = $(HOME)/Repos/site/silc/tasks/rotation/click

.PHONY: build deploy site

SOURCES := $(wildcard src/*.coffee)

build: $(SOURCES)
	coffee -co lib/ src/
	@echo "coffee sources were compiled"

FILES = index.html css lib images app.manifest apple-touch-icon.png .htaccess

deploy: build $(FILES)
	rsync -r --exclude=.svn $(FILES) $(DEPLOY_DIR)
	@echo "files copied to $(DEPLOY_DIR)"

site: build $(FILES)
	rsync -r $(FILES) $(SITE_DIR)
	@echo "files copied to $(SITE_DIR)"
