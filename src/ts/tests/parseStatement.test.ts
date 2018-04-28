import { expect } from "chai";
import { newStatement } from "../groupStatements";
import { parseStatement } from "../parseStatement";

describe("parseStatement", () => {
    it("should parse string into Statement object", () => {
        const input = "\thello";
        const expected = newStatement(1, "hello");
        const result = parseStatement(input);
        expect(result).to.deep.eq(expected);
    });

    it("case 2", () => {
        const input = "hello";
        const expected = newStatement(0, "hello");
        const result = parseStatement(input);
        expect(result).to.deep.eq(expected);
    });

    it("case 3", () => {
        const input = "    hello";
        const expected = newStatement(1, "hello");
        const result = parseStatement(input);
        expect(result).to.deep.eq(expected);
    });

    it("should throw error if the indented spaces is not multiplier of 4", () => {
        const inputs = [
            " hello",
            "  hello",
            "   hello",
        ];
        inputs.forEach((x) => {
            expect(() => {
                parseStatement(x);
            }).to.throw();
        });
    });
});
