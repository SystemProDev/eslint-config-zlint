module.exports = {

    create: function(context) {

        return {

            CallExpression: function(node) {

                if (node.callee.name === "find") {

                    context.report({
                        node: node,
                        message: "Please use find() instead!",
                        fix: function(fixer) {
                            return fixer.replaceText(node.callee, "find");
                        }
                    });
                }
            }
        };

    }
};
