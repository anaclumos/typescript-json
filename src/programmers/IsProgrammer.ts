import ts from "typescript";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { ValueFactory } from "../factories/ValueFactory";
import { CheckerProgrammer } from "./CheckerProgrammer";

export namespace IsProgrammer {
    export const CONFIG: CheckerProgrammer.IConfig = {
        combiner: () => (type: "and" | "or") => {
            const initial: ts.TrueLiteral | ts.FalseLiteral =
                type === "and"
                    ? ts.factory.createTrue()
                    : ts.factory.createFalse();
            const binder =
                type === "and"
                    ? ts.factory.createLogicalAnd
                    : ts.factory.createLogicalOr;
            return (_input: ts.Expression, expressions: ts.Expression[]) =>
                expressions.length === 1
                    ? expressions[0]!
                    : expressions.reduce((x, y) => binder(x, y), initial);
        },
        functors: {
            name: "is",
        },
        trace: false,
    };

    export const generate = CheckerProgrammer.generate(CONFIG);
    export const generate_functors =
        CheckerProgrammer.generate_functors(CONFIG);

    export const express = CheckerProgrammer.decode(CONFIG);
    export function express_to_json(input: ts.Expression): ts.Expression {
        return ts.factory.createLogicalAnd(
            ts.factory.createStrictEquality(
                ValueFactory.TYPEOF(input),
                ts.factory.createStringLiteral("object"),
            ),
            ts.factory.createStrictEquality(
                ValueFactory.TYPEOF(IdentifierFactory.join(input, "toJSON")),
                ts.factory.createStringLiteral("function"),
            ),
        );
    }
}
