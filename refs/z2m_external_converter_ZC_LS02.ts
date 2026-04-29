// Zigbee2MQTT external converter for Moes ZC-LS02
// Source: https://github.com/Koenkk/zigbee2mqtt/issues/27677
import {access as ea, presets as e, options} from "zigbee-herdsman-converters/lib/exposes";
import * as tuya from "zigbee-herdsman-converters/lib/tuya";

export default {
    fingerprint: tuya.fingerprint("TS0601", ["_TZE284_koxaopnk"]),
    model: "ZC-LS02",
    vendor: "Tuya",
    description: "Moes Zigbee Roller Blind (ZC-LS02)",
    onEvent: tuya.onEvent(),
    configure: tuya.configureMagicPacket,
    fromZigbee: [tuya.fz.datapoints],
    toZigbee: [tuya.tz.datapoints],
    exposes: [
        e.cover_position().setAccess("position", ea.STATE_SET),
        e.battery(),
    ],
    meta: {
        tuyaDatapoints: [
            [
                1,
                "state",
                tuya.valueConverterBasic.lookup({
                    OPEN: tuya.enum(0),
                    STOP: tuya.enum(1),
                    CLOSE: tuya.enum(2),
                }),
            ],
            [2, "position", tuya.valueConverter.coverPosition],
            [3, "position", tuya.valueConverter.raw],
            [
                5,
                "motor_direction",
                tuya.valueConverterBasic.lookup({
                    normal: tuya.enum(0),
                    reversed: tuya.enum(1),
                }),
            ],
            [101, "battery", tuya.valueConverter.raw],
        ],
    },
};
