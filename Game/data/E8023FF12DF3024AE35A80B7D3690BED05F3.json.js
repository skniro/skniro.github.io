GS.dataCache['E8023FF12DF3024AE35A80B7D3690BED05F3'] = {
    "uid": "E8023FF12DF3024AE35A80B7D3690BED05F3",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Load Menu",
        "type": "vn.scene",
        "parentId": "0680E2763533F740B54A6C139E537CF59C20",
        "chapterUid": "0680E2763533F740B54A6C139E537CF59C20",
        "order": 1,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.Comment",
                "params": {
                    "text": "In this scene we will make our own load menu. We use an image-map to keep it simple. Feel free to use pictures, videos, hotspots, etc. to make it more dynamic. We support 5 pages with 8 save-slots per page by default which makes 40 save-slots in total. Feel free to add more! \n\nSince only 8 save-slots can be visible at a time, we only need 8 different pictures. So we call \"Show Picture\" 8 times with a dummy image to make placement a little bit easier. That dummy image is replaced later with the screenshot-image of the save-slot. Just check out \"Show Save Game Image\" common event in database.\n\nIf the user clicks on one of the 8 save-slot areas, we call the \"Load Game\" common event which loads the selected save-game if exists. We pass the current selected page and the number of the clicked save-slot(1 - 8) to that common event so it can calculate the actual save-slot number. Just check out \"Load Game\" common event in database.\n\nIf the users clicks on one of the 5 page-numbers, we put the number of the clicked page into the local \"Page\" number variable. Then we  call the \"Update Pages\" common event, which makes sure that only one page is displayed as selected since image-map allows to select all hotspots independent from each other. Just check \"Update Pages\" common event in database. After that we jump to the \"Refresh Pictures\" label to call the \"Show Save Game Image\" common event again for each picture so that each picture shows the correct save-game image for the selected page."
                },
                "indent": 0,
                "uid": "B2761824485989444C49AB25E73E1151D638",
                "expanded": true
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "In Game",
                        "index": 5,
                        "scope": 0
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": {
                        "name": "In Game",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "A55A151586605748F36A02E43AB270EEAC6F"
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "targetReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "4BFE81254AA750437D6887604F324C51219D"
            },
            {
                "id": "gs.FreezeScreen",
                "params": {},
                "indent": 0,
                "uid": "CBFADC2F64D8844CCE5B17993DFF1D26FAFA"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
                        "index": 1,
                        "scope": 0
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 1,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "sourceReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "7DC063FC7B0AF24591492433DADA1802637E"
            },
            {
                "id": "gs.ShowImageMap",
                "params": {
                    "number": 100,
                    "hotspots": [
                        {
                            "x": 0,
                            "y": 265,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 265,
                                "width": 415,
                                "height": 64,
                                "action": 1,
                                "label": "back",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 415,
                                "height": 64
                            }
                        },
                        {
                            "x": 1851,
                            "y": 117,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1851,
                                "y": 117,
                                "width": 69,
                                "height": 64,
                                "action": 1,
                                "label": "page1",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Page 1",
                                    "index": 0,
                                    "scope": 0
                                },
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 69,
                                "height": 64
                            }
                        },
                        {
                            "x": 1851,
                            "y": 202,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1851,
                                "y": 202,
                                "width": 69,
                                "height": 64,
                                "action": 1,
                                "label": "page2",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Backlog Opened",
                                    "index": 1,
                                    "scope": 1,
                                    "changed": true,
                                    "domain": "com.degica.vnm.default"
                                },
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 69,
                                "height": 64
                            }
                        },
                        {
                            "x": 1851,
                            "y": 287,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1851,
                                "y": 287,
                                "width": 69,
                                "height": 64,
                                "action": 1,
                                "label": "page3",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Toggle Skip",
                                    "index": 2,
                                    "scope": 1,
                                    "domain": "com.degica.vnm.default",
                                    "changed": true
                                },
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 69,
                                "height": 64
                            }
                        },
                        {
                            "x": 1851,
                            "y": 372,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1851,
                                "y": 372,
                                "width": 69,
                                "height": 64,
                                "action": 1,
                                "label": "page4",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Toggle Auto",
                                    "index": 3,
                                    "scope": 1,
                                    "domain": "com.degica.vnm.default",
                                    "changed": true
                                },
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 69,
                                "height": 64
                            }
                        },
                        {
                            "x": 1851,
                            "y": 457,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1851,
                                "y": 457,
                                "width": 69,
                                "height": 64,
                                "action": 1,
                                "label": "page5",
                                "bindToSwitch": true,
                                "switch": {
                                    "name": "Page 5",
                                    "index": 4,
                                    "scope": 0
                                },
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 69,
                                "height": 64
                            }
                        },
                        {
                            "x": 872,
                            "y": 117,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 872,
                                "y": 117,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot1",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 872,
                            "y": 304,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 872,
                                "y": 304,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot2",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 872,
                            "y": 491,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 872,
                                "y": 491,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot3",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 872,
                            "y": 676,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 872,
                                "y": 676,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot4",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 1165,
                            "y": 117,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1165,
                                "y": 117,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot5",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 1162,
                            "y": 303,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1162,
                                "y": 303,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot6",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 1162,
                            "y": 676,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1162,
                                "y": 676,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot8",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 1162,
                            "y": 491,
                            "angle": 0,
                            "zoom": 1,
                            "horizontalFlip": false,
                            "data": {
                                "x": 1162,
                                "y": 491,
                                "width": 230,
                                "height": 136,
                                "action": 1,
                                "label": "slot7",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": 1,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 0,
                                "green": 0,
                                "blue": 0,
                                "alpha": 160
                            },
                            "size": {
                                "width": 230,
                                "height": 136
                            }
                        },
                        {
                            "x": 0,
                            "y": 457,
                            "angle": 0,
                            "zoom": 0,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 457,
                                "width": 415,
                                "height": 64,
                                "action": 1,
                                "label": "Settings",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": null,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 415,
                                "height": 64
                            }
                        },
                        {
                            "x": 0,
                            "y": 521,
                            "angle": 0,
                            "zoom": 0,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 521,
                                "width": 415,
                                "height": 64,
                                "action": 1,
                                "label": "CG",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": null,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 415,
                                "height": 64
                            }
                        },
                        {
                            "x": 0,
                            "y": 393,
                            "angle": 0,
                            "zoom": 0,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 393,
                                "width": 415,
                                "height": 64,
                                "action": 1,
                                "label": "Save Menu",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": null,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 415,
                                "height": 64
                            }
                        },
                        {
                            "x": 0,
                            "y": 328,
                            "angle": 0,
                            "zoom": 0,
                            "horizontalFlip": false,
                            "data": {
                                "x": 0,
                                "y": 328,
                                "width": 415,
                                "height": 64,
                                "action": 1,
                                "label": "Load Menu",
                                "bindToSwitch": false,
                                "bindEnabledState": false,
                                "bindValueTo": false,
                                "finish": false,
                                "onClickSound": {
                                    "name": ""
                                },
                                "onHoverSound": {
                                    "name": ""
                                },
                                "zoom": null,
                                "angle": 0,
                                "horizontalFlip": false
                            },
                            "color": {
                                "red": 255,
                                "green": 0,
                                "blue": 255,
                                "alpha": 130
                            },
                            "size": {
                                "width": 415,
                                "height": 64
                            }
                        }
                    ],
                    "ground": {
                        "name": "LoadGame_Idle.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "hover": {
                        "name": "LoadGame_Hover.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "unselected": null,
                    "selected": {
                        "name": "LoadGame_Selected.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "selectedHover": {
                        "name": "LoadGame_Selected.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/In-Game UI"
                    },
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 0,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "fieldFlags": {
                        "easing.type": 1,
                        "animation.type": 0,
                        "zOrder": 1,
                        "blendMode": 1,
                        "origin": 1
                    },
                    "zOrder": 0,
                    "blendMode": 0,
                    "predefinedPositionId": 0,
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "expanded": true,
                "uid": "0A850A9E0ACC4644E27BF4D1DC5BEED26770"
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 0,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 879,
                        "y": 123,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 0,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "AF1EE38E8EA8A146D1782722834029714662",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 1,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 879,
                        "y": 311,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1063,
                            "y": 475,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 217,
                            "height": 122
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "5D3074DD30A78847F36A2E71F74DDE757844",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 2,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 879,
                        "y": 496,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 786,
                            "y": 255,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 259,
                            "height": 146
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "B67A5B0982E9B74F5638239047D03143B4E2",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 3,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 879,
                        "y": 682,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1063,
                            "y": 846,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 217,
                            "height": 122
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "262841EE0717F54E897AB7480E98AE41F42A",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 4,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1171,
                        "y": 123,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1515,
                            "y": 287,
                            "width": 166,
                            "height": 94,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "BE922281199F784B132A2D23ED60BCFF613A",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 5,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1171,
                        "y": 309,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {
                            "x": 1525,
                            "y": 316,
                            "zoom": 1,
                            "angle": 0,
                            "horizontalFlip": false,
                            "width": 166,
                            "height": 94
                        },
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "C581AF555A9EE644D24A2AD6EF831C94D59F",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 6,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1169,
                        "y": 497,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "20F084AE4DB28542AA6913F1E1ACBDB7C51F",
                "expanded": false
            },
            {
                "id": "gs.ShowPicture",
                "params": {
                    "viewport": {
                        "type": "ui"
                    },
                    "size": {
                        "type": 0,
                        "width": 100,
                        "height": 100
                    },
                    "visual": {
                        "type": 0,
                        "quad": {
                            "color": {
                                "red": 255,
                                "green": 255,
                                "blue": 255,
                                "alpha": 255
                            }
                        },
                        "frame": {
                            "thickness": 16,
                            "cornerSize": 16
                        },
                        "threePartImage": {
                            "orientation": 0
                        }
                    },
                    "predefinedPositionId": 0,
                    "number": 7,
                    "blendMode": 0,
                    "zOrder": 2000,
                    "duration": 0,
                    "origin": 0,
                    "waitForCompletion": 0,
                    "positionType": 1,
                    "position": {
                        "x": 1169,
                        "y": 687,
                        "angle": 0,
                        "zoom": 1,
                        "horizontalFlip": false,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 0
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 0,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 1,
                        "zOrder": 0,
                        "blendMode": 1,
                        "visual.type": 1,
                        "visual.frame.thickness": 1,
                        "visual.frame.cornerSize": 1,
                        "visual.threePartImage.orientation": 1,
                        "visual.quad.color": 1,
                        "size.type": 1,
                        "size.width": 1,
                        "size.height": 1,
                        "viewport.type": 1,
                        "origin": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "graphic": {
                        "name": "HomeThumb.png",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        },
                        "folderPath": "Graphics/Pictures/CG Gallery"
                    },
                    "numberDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "B56A8984045E05490388BC76A294BFCDBF74",
                "expanded": false
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Refresh Pictures"
                },
                "indent": 0,
                "uid": "F84EF45859C50448F11BEBE17C12C4546B91"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            0,
                            1,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "282E2ED94D4FC44B306B36D7384FAD10F26F"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            1,
                            2,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "B2E199306A73D8434E49F14252E99F4C32AD"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            2,
                            3,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "979815F15888F24CD47AFC05F6AC8848A497"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            3,
                            4,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "E7DC228024DDF944A24A8DD83DADA67D1CB1"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            4,
                            5,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "62F8249780F91243332B1D96BC493EBFCDAA"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            5,
                            6,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "7939CD084754C242BD18C693DC71E1A15D82"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            6,
                            7,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "6E02FE4F68714343B658CAD05C4EBC1FA437"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "5FDD1950K9FA1A4BCCSB00CEE54C8BC8AE54",
                    "parameters": {
                        "values": [
                            7,
                            8,
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            }
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "2B27136172F01640CD480B262C3F720852FF"
            },
            {
                "id": "gs.WaitCommand",
                "params": {
                    "time": 1.2
                },
                "indent": 0,
                "uid": "5CA58F652812824B2C6A00E76579EDB1260B"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {
                        "values": []
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "68ED59F14DFE974EBB088822B45082DF9458"
            },
            {
                "id": "gs.ScreenTransition",
                "params": {
                    "graphic": null,
                    "duration": 0,
                    "vague": 30,
                    "fieldFlags": {
                        "graphic": 0,
                        "vague": 1,
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "74AEB45D1541E8475F3B82D682C1340B412C"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "4A46EA2E5F7C934C392B4B36C8317664BBF5"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "D0FC656A31F18246F04A6DF13272FD8674FF"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "back"
                },
                "indent": 0,
                "uid": "D529C0612F5E664EC868595826288DA156AC"
            },
            {
                "id": "vn.ReturnToPreviousScene",
                "params": {},
                "indent": 0,
                "uid": "26B86C9E49F0344E0E9AEE72ACD535412B1E"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "uid": "B1F28CE15F4AA147B95B7CF4CACD34A1CF7D",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Load Menu"
                },
                "uid": "8B87F22B6D56144C1329D7C9E7F71C3477AF",
                "indent": 0
            },
            {
                "id": "vn.CallScene",
                "params": {
                    "scene": {
                        "uid": "E8023FF12DF3024AE35A80B7D3690BED05F3",
                        "name": "Load Menu"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "1F7AB97B8D9B1945EE4B1E558CB40F7E370C",
                "indent": 0
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "C69CE1C382DE05464E28AFB8A40CC8BDB29B"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Save Menu"
                },
                "uid": "23B0B6994EF992470488E901DA054C330B5F",
                "indent": 0
            },
            {
                "id": "vn.CallScene",
                "params": {
                    "scene": {
                        "uid": "788F76F4231BE442882AEDA37BCF0AE6556B",
                        "name": "Save Menu"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "054682358F5538429F5BF4060D0BD6BF0290",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "Settings"
                },
                "uid": "FE8942CB6FE05645EF18C5A18D6DA563569C",
                "indent": 0
            },
            {
                "id": "vn.CallScene",
                "params": {
                    "scene": {
                        "uid": "20047CED82D9664F912885F8DD2F79B3C1E8",
                        "name": "Settings Menu"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "12662CA12E3B3549BE4A6AB489EDDB3B8A84",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "CG"
                },
                "uid": "AAB47FFD6D79574D5198B424024A6EFD5FF3",
                "indent": 0
            },
            {
                "id": "vn.CallScene",
                "params": {
                    "scene": {
                        "uid": "83F3B6066A2EE444DD0AD086BF9D53D4A299",
                        "name": "CG Gallery"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "59064B9E7E95B54A8A8BA5A1C466BF11A8BA",
                "indent": 0
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot1"
                },
                "indent": 0,
                "uid": "06396C7978B28748B639E782CCD0A74A0F1E"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "FB6F73157A093642307808641E7BC3E5F76A"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot1"
                },
                "indent": 0,
                "uid": "23DA73D4402A504EEF7A6815472A302119BA"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "D8E05EB72661774C22191695989A9A5A66FA",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            1
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "C2D24BED492FB644121844101B85DD2115AB"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "FA391B347E9317497128AC3329396F724EE1"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot2"
                },
                "indent": 0,
                "uid": "DAA11ED88283E44E9B28D38515D8E1455095"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "D8E05EB72661774C22191695989A9A5A66FA",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            2
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "82C996C02895D541C00B1C26E7B9454263BA"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "DE0A882D89BE284B4E986284EACE0A547ACB"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot3"
                },
                "indent": 0,
                "uid": "481341A50752F348566BEA62D98E9AE4D8A5"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "D8E05EB72661774C22191695989A9A5A66FA",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0,
                                "domain": "com.degica.vnm.default"
                            },
                            3
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "47C262942797854E1568F997FC67DD8A0A94"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "E83C2B822306D64899691EC86F87E96A1666"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot4"
                },
                "indent": 0,
                "uid": "9F4791D84B19004B593B2D98782E3CAFB77A"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "D8E05EB72661774C22191695989A9A5A66FA",
                    "parameters": {
                        "values": [
                            -999999999,
                            0
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "7936D349755801421A297A31B08EADDA1A5A"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot5"
                },
                "indent": 0,
                "uid": "39E109416244D845EC8BBB48E8328778AAB2"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "D8E05EB72661774C22191695989A9A5A66FA",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            5
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "5F46597A40BFD641FE4A0E422151BA4142E9"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "B8A3C17A66F562473019AA53E89494D11A20"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot6"
                },
                "indent": 0,
                "uid": "F2D2AD4D8E550844CC2BE8721201A9875CBE"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "D8E05EB72661774C22191695989A9A5A66FA",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            6
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "D85E25967564D84F1E3A0455AD37931A90D2"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "7D3ABF263821774E791A08153695F1B99D5E"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot7"
                },
                "indent": 0,
                "uid": "210D5ADC46E34142434B9004ADEA4CACECF0"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "D8E05EB72661774C22191695989A9A5A66FA",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            7
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "206A0A684EB8554F233AA149296A134FFEB1"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "3530D95D356DA543276B83235003C3021979"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "slot8"
                },
                "indent": 0,
                "uid": "5C4E09E79C1BA1447E2B4F63B7156C1C36D1"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "D8E05EB72661774C22191695989A9A5A66FA",
                    "parameters": {
                        "values": [
                            {
                                "name": "Page",
                                "index": 1,
                                "scope": 0
                            },
                            8
                        ]
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "5E75EE4C974979488C38EC08F056198499CF"
            },
            {
                "id": "gs.Idle",
                "params": {},
                "indent": 0,
                "uid": "06C8D6886D38254EFD4A7288168518D2B97E"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page1"
                },
                "indent": 0,
                "uid": "BE127AA88702234E9D5869D3AC96CDD5D5C1"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
                        "index": 1,
                        "scope": 0
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 1,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "sourceReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "74E546833AD50243556B65711B93FE14AFE2"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {
                        "values": []
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "4F4D9A3617836841CE49F8612494044C0182"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "A19AAE9D9BC181432B38B764F4E0160A601C"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page2"
                },
                "indent": 0,
                "uid": "8707F3151B528543C47B30A56C6C4652F280"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
                        "index": 1,
                        "scope": 0
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 2,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "sourceReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "F02E7082276AD3406D6A4A335D75E41E1CC6"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {
                        "values": []
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "383E51F844AF6442956B3B7203BA58C740FF"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "59C28F50619E584FD1891EC4283081CAAAB3"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page3"
                },
                "indent": 0,
                "uid": "6E89A93B21542244A5395780E07B7D5CEED1"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
                        "index": 1,
                        "scope": 0
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 3,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "sourceReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "4DF6D3F7521ED841F54A6C829AE5B2ABB16A"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {
                        "values": []
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "4C2034E49D9A294ACD9A895291A0D8F34A2A"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "BB06BA05330EF44E3D9B5D37765624596CB8"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page4"
                },
                "indent": 0,
                "uid": "B5A6E48804FFC54F9129778673B29D4365DB"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
                        "index": 1,
                        "scope": 0
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 4,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "sourceReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "408F29378BF6D242888A92D979AAE5DB4502"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {
                        "values": []
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "0A43F24E64FE6240891AB353D5BE428F2B0B"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "24463A1556E6D14D874BDDE3B1439268CE83"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "page5"
                },
                "indent": 0,
                "uid": "9E775F8623169541DF59A00759AD85B92949"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "Page",
                        "index": 1,
                        "scope": 0
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 5,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReference": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "sourceReferenceDomain": "com.degica.vnm.default"
                },
                "indent": 0,
                "uid": "4AA0237E12FFA04BE75843683694EF998AB4"
            },
            {
                "id": "gs.CallCommonEvent",
                "params": {
                    "commonEventId": "611C50B503B7324D026B38669E1A2D89103D",
                    "parameters": {
                        "values": []
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "F8477B8D50E6434E193BC1E6048F092CF48F"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "Refresh Pictures",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "850D63EF6BFFE7463B08AE818F113C08C032"
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "Page 1",
                "index": 0,
                "scope": 0
            },
            {
                "name": "Page 2",
                "index": 1,
                "scope": 0
            },
            {
                "name": "Page 3",
                "index": 2,
                "scope": 0
            },
            {
                "name": "Page 4",
                "index": 3,
                "scope": 0
            },
            {
                "name": "Page 5",
                "index": 4,
                "scope": 0
            },
            {
                "name": "In Game",
                "index": 5,
                "scope": 0
            }
        ],
        "numberVariables": [
            {
                "name": "Slot",
                "index": 0,
                "scope": 0
            },
            {
                "name": "Page",
                "index": 1,
                "scope": 0,
                "domain": "com.degica.vnm.default"
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
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}