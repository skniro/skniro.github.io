GS.dataCache['8DD53A482E6B29415B792E428834861B9B81'] = {
    "uid": "8DD53A482E6B29415B792E428834861B9B81",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "新記錄",
        "type": "data_record",
        "order": 12,
        "category": "commonEvents",
        "id": "8DD53A482E6B29415B792E428834861B9B81",
        "isFolder": false,
        "parentId": "665F7EFC4091674CD6383D3829AD031A9CCC",
        "data": {
            "name": "新記錄",
            "startCondition": 1,
            "conditionEnabled": false,
            "parallel": true,
            "autoPreload": true,
            "singleInstance": true,
            "inline": false,
            "parameters": [],
            "commands": [
                {
                    "id": "gs.SetTargetMessage",
                    "params": {
                        "id": "gameMessage_message",
                        "numberDomain": "com.degica.vnm.default",
                        "number": 0,
                        "type": 1,
                        "clear": 0
                    },
                    "indent": 0,
                    "uid": "89FA62365EF6764E6E6849870FCDF8BB3259"
                },
                {
                    "id": "gs.GetInputData",
                    "params": {
                        "field": 132,
                        "state": 0,
                        "targetVariable": {
                            "name": "Message Box Visibility",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "uid": "C1F9713C5929A848EF889224E8CC4D0F2DC4",
                    "indent": 0
                },
                {
                    "id": "gs.Script",
                    "params": {
                        "script": "SceneManager.scene.messageAreas[0].layout.controls[1].opacity = GameManager.variableStore.tempBooleans[0] ? 255 : 0"
                    },
                    "indent": 0,
                    "uid": "D99E61DD52DE484A393BD6A7F727C5853889",
                    "expanded": true
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Input Data",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 2,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 0,
                    "uid": "C0E2CC698B338141C539D901982DA6403694"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Input Data",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 2,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "2592A01A354951474E5B336172B63F7AE145"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 99,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 1,
                    "uid": "9F95748F8402814E6C5930C01939DCD7373B"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 101,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 1,
                    "uid": "5AA7656407AB4142537989B2449C20DE1600"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 102,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 1,
                    "uid": "C4D898B78AF8D040376BEF824D9AAB34DBCD"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 1,
                    "uid": "DA0318F6368C0243FB4B9FE20EC7E178C458"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 300,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 1,
                    "uid": "929273626E60214F27189DB6E3CB9D3E4FB5"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 1,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "02CA8F72134E574EE948D221291DF62F75BD"
                },
                {
                    "id": "vn.MessageVisibility",
                    "params": {
                        "duration": 0,
                        "waitForCompletion": true,
                        "visible": 1,
                        "animation": {
                            "type": 1,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "duration": 0
                        }
                    },
                    "indent": 2,
                    "uid": "1E2DA77A76DAA84FB12A3795173BC046DAB0"
                },
                {
                    "id": "gs.ConditionElse",
                    "params": {},
                    "indent": 1,
                    "uid": "CC683BC4857E144B7E28DBA2EA7303CF487D"
                },
                {
                    "id": "vn.MessageVisibility",
                    "params": {
                        "duration": 0,
                        "waitForCompletion": true,
                        "visible": 0,
                        "animation": {
                            "type": 1,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "duration": 0
                        }
                    },
                    "indent": 2,
                    "uid": "A5CCC1594D76D3464D2999A151C2AA4FE91D"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 0,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 1,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 1,
                    "uid": "902A9BF03415574D0B39FEB8332A828315DA"
                },
                {
                    "id": "gs.GetInputData",
                    "params": {
                        "field": 11,
                        "state": 0,
                        "targetVariable": {
                            "name": "Input Data",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "uid": "13B74FC251C1E6402E394B48B8825228583F"
                },
                {
                    "id": "gs.Condition",
                    "params": {
                        "variable": {
                            "name": "Input Data",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "numberValue": 2,
                        "textValue": "",
                        "switchValue": 0,
                        "valueType": 0,
                        "operation": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 2,
                    "uid": "F7B3EAF17107624D082AE6A5282DC9E68C7F"
                },
                {
                    "id": "gs.ChangeBooleanVariables",
                    "params": {
                        "target": 0,
                        "targetReferenceDomain": "com.degica.vnm.default",
                        "targetReference": {
                            "index": 0,
                            "scope": 1,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetVariable": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "targetRangeScope": 0,
                        "rangeStart": 0,
                        "rangeEnd": 0,
                        "value": 0,
                        "previewBackground": {
                            "name": "$live_preview_snapshot"
                        }
                    },
                    "indent": 3,
                    "uid": "04EEF73D7DCCA84AD35896B532FA896AA4E3"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 99,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "908938F93FEE554AE71A9309BD3DB5D9CD80"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 101,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "E07C4D493B375644D25B92006FEFE805F00D"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 0,
                        "number": 102,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "54B1C9011559D648034800A05705007C1304"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 0,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "825B5C7223F4764C195AA4D0CCFF29B3D552"
                },
                {
                    "id": "vn.SetObjectData",
                    "params": {
                        "objectType": 2,
                        "number": 300,
                        "numberDomain": "com.degica.vnm.default",
                        "layer": 0,
                        "characterId": null,
                        "field": 10,
                        "numberValue": 0,
                        "textValue": {
                            "scope": 1,
                            "index": 0,
                            "domain": "com.degica.vnm.default"
                        },
                        "switchValue": {
                            "name": "Message Box Visible",
                            "index": 0,
                            "scope": 0,
                            "domain": "com.degica.vnm.default"
                        }
                    },
                    "indent": 3,
                    "uid": "B05DA0624F763943C48BF058A4452CCC7EF7"
                },
                {
                    "id": "vn.MessageVisibility",
                    "params": {
                        "duration": 0,
                        "waitForCompletion": true,
                        "visible": 1,
                        "animation": {
                            "type": 1,
                            "movement": 3,
                            "mask": {
                                "graphic": null,
                                "vague": 30
                            }
                        },
                        "easing": {
                            "type": 0,
                            "inOut": 1
                        },
                        "fieldFlags": {
                            "duration": 0
                        }
                    },
                    "indent": 3,
                    "uid": "CE0288452DF7B54ECA7904F6EBA77B2041A1"
                }
            ],
            "index": "8DD53A482E6B29415B792E428834861B9B81",
            "booleanVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "numberVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ],
            "stringVariables": [
                {
                    "name": "",
                    "index": 0,
                    "scope": 0
                }
            ]
        },
        "localizableStrings": {}
    },
    "summary": [
        "name",
        "type",
        "order"
    ],
    "externalItems": []
}