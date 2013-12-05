DEPLOY_DIR = $(WEBDOCS)/SILC/task/drag

SITE_DIR = $(HOME)/Repos/site
TASK_DIR = $(HOME)/Repos/site/silc/tasks/drag
OLDPWD = $(PWD)

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
	cd $(TASK_DIR) 
	git commit -am 'update'
	git push origin master
	@echo "site repo updated"
	cd $(OLDPWD)
