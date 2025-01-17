import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_validate_equals } from "./_test_validate_equals";

export const test_validate_equals_object_union_implicit = _test_validate_equals(
    "union object",
    ObjectUnionImplicit.generate,
    (input) => TSON.validateEquals(input),
);
