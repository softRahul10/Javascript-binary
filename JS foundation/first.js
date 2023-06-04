// Inside a JS Engine

// file.js -> JS Engine [ Parsing (Lexical Analysis:Tokenized Code) -> AST -> Interpreter ] -> Machine Code 0101

function parse(code) {
      let result = code.split(/\s+/);
      return result;
}

console.log(parse("function myFn() { let x = 10; }"));
