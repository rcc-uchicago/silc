DEPLOY_DIR = $(WEBDOCS)/SILC/task/drag

SITE_DIR = $(HOME)/Repos/site
TASK_DIR = $(HOME)/Repos/site/silc/tasks/drag

.PHONY: build deploy

SOURCES := $(wildcard src/*.coffee)

build: $(SOURCES)
	coffee -co lib/ src/
	@echo "coffee sources were compiled"

FILES = index.html lib images 

deploy: build $(FILES)
	rsync -r $(FILES) $(DEPLOY_DIR)
	@echo "files copied to $(DEPLOY_DIR)"

site: build $(FILES)
	rsync -r $(FILES) $(TASK_DIR)
	@echo "files copied to $(TASK_DIR)"
	git --git-dir=$(SITE_DIR)/.git --work-tree=$(TASK_DIR) commit -am 'update'
	git --git-dir=$(SITE_DIR)/.git --work-tree=$(TASK_DIR) push origin master
	@echo "site repo updated"
