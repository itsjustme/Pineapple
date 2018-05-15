import { expect } from "chai";
import { addBrackets } from "../../addBrackets";
import { addSemicolon } from "../../addSemicolon";

describe("addSemicolon", () => {
    it("should not add semicolon for partial object member assignment/binding", () => {
        const input =
`
let fruit =
    .sibling =
        .sibiling =
            .name = "Durian"

let x = 5
let y <- 6
`;
        const expected =
`let fruit =
    .sibling =
        .sibiling =
            .name = "Durian";
let x = 5;
let y <- 6`;
        expect(addSemicolon(input)).to.eq(expected);
    });

    it("every statement should end with semicolon, except the last one", () => {
        const input =
`
let a = 6
let x = 5
let y <- 6
`;
        const expected =
`let a = 6;
let x = 5;
let y <- 6`;
        expect(addSemicolon(input)).to.eq(expected);

    });

    it("if elif else", () => {
        const input =
`
if condition
    let a = 6
elif condition
    let x = 5
else
    let y <- 6
let z = 3
`;
        const expected =
`if condition
    let a = 6;
elif condition
    let x = 5;
else
    let y <- 6;
let z = 3`;
        expect(addSemicolon(input)).to.eq(expected);

    });

});
