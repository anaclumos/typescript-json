import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_application } from "./_test_application";

export const test_application_array_recursive = _test_application(
    "recursive array",
    TSON.application<[ArrayRecursive]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/ArrayRecursive.ICategory",
            },
        ],
        components: {
            schemas: {
                "ArrayRecursive.ICategory": {
                    type: "object",
                    properties: {
                        children: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ArrayRecursive.ICategory",
                            },
                            nullable: false,
                        },
                        id: {
                            type: "number",
                            nullable: false,
                        },
                        code: {
                            type: "string",
                            nullable: false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        sequence: {
                            type: "number",
                            nullable: false,
                        },
                        created_at: {
                            $ref: "#/components/schemas/ArrayRecursive.ITimestamp",
                        },
                    },
                    nullable: false,
                    required: [
                        "children",
                        "id",
                        "code",
                        "name",
                        "sequence",
                        "created_at",
                    ],
                },
                "ArrayRecursive.ITimestamp": {
                    type: "object",
                    properties: {
                        time: {
                            type: "number",
                            nullable: false,
                        },
                        zone: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["time", "zone"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
