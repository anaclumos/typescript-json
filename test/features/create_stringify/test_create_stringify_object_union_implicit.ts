import TSON from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_union_implicit = _test_stringify(
    "union object",
    ObjectUnionImplicit.generate,
    TSON.createStringify<ObjectUnionImplicit>(),
);
