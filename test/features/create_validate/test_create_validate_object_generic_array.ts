import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_generic_array = _test_validate(
    "generic arraied object",
    ObjectGenericArray.generate,
    TSON.createValidate<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
