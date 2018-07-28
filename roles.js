/**
 * @fileoverview Plugin for eslint custom roles
 * @author Zoran Panev
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import requireIndex from "requireindex";

export const rules = requireIndex(__dirname + "/rules");

export const configs = {
  recommended: {
    plugins: ["delta"], // eslint-plugin-delta
    rules: {
      "delta/expire": "warn",
      "delta/no-fixme": "error"
    }
  }
}
