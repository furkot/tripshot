PROJECT=tripshot
GLOBALVAR=furkotTripshot
BUILD_DIR=build
SCRIPT_NAME=$(BUILD_DIR)/furkot-$(PROJECT)

BIN=./node_modules/.bin
SRC = $(wildcard lib/*.js)

%.gz: %
	gzip --best --stdout $< > $@

%.min.js: %.js
	$(BIN)/uglifyjs $< --mangle --no-copyright --compress --output $@

all: check compile

check: lint test

lint:
	$(BIN)/jshint lib test

compile: $(SCRIPT_NAME).js

build:
	mkdir -p $@

ESBUILD_OPTS += --bundle \
	--log-level=warning \
	--color=false \
	--tree-shaking=true \
	--global-name=${GLOBALVAR} \
	--target=es2019


$(SCRIPT_NAME).js: lib/index.js $(SRC) | build
	$(BIN)/esbuild $< \
		$(ESBUILD_OPTS) \
		--sourcemap=linked \
		--outfile=$@

$(SCRIPT_NAME).min.js: lib/index.js $(SRC) | build
	$(BIN)/esbuild $< \
		$(ESBUILD_OPTS) \
		--drop:console \
		--drop:debugger \
		--minify \
		--outfile=$@

clean:
	rm -rf $(BUILD_DIR)

distclean: clean
	rm -rf node_modules

.PRECIOUS: $(SCRIPT_NAME).min.js

dist: $(SCRIPT_NAME).min.js.gz

.PHONY: all lint test compile dist clean distclean
