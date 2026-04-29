"""Tuya ZC-LS02 roller blind motor quirk for _TZE284_koxaopnk."""

import zigpy.types as t
from zhaquirks.tuya.builder import TuyaQuirkBuilder


class MotorDirection(t.enum8):
    """Motor direction values."""

    Normal = 0x00
    Reversed = 0x01


(
    TuyaQuirkBuilder("_TZE284_koxaopnk", "TS0601")
    .tuya_cover(
        control_dp=1,
        position_state_dp=3,
        position_control_dp=2,
    )
    .tuya_battery(dp_id=101)
    .tuya_enum(
        dp_id=5,
        attribute_name="motor_direction",
        enum_class=MotorDirection,
        translation_key="motor_direction",
        fallback_name="Motor direction",
    )
    .add_to_registry()
)
