import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_object_generic = _test_is_stringify(
    "generic object",
    ObjectGeneric.generate,
    TSON.createIsStringify<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
