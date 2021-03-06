/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const { cpSync } = require("fs");
const { resolve } = require("path");
const rimraf = require("rimraf");

const main = async () => {
	rimraf.sync(resolve(process.cwd(), "pages", "api"));

	cpSync(
		resolve(process.cwd(), "..", "api"),
		resolve(process.cwd(), "pages", "api"),
		{ recursive: true }
	);

	rimraf.sync(resolve(process.cwd(), "pages", "api", "package.json"));
};

main();
