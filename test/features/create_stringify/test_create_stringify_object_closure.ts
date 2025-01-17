import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_closure = _test_stringify(
    "closured object",
    ObjectClosure.generate,
    TSON.createStringify<ObjectClosure>(),
);
