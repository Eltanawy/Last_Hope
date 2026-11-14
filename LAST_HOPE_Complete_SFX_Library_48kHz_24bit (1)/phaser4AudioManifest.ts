/**
 * LAST HOPE — ARES Complete Audio Manifest for Phaser 4 + TypeScript
 * Sample Rate: 48,000 Hz · Bit Depth: 24-bit PCM · Format: WAV
 * Total Assets: 218
 */

export type LastHopeSoundId =
  | 'TARSY_001'
  | 'TARSY_002'
  | 'TARSY_003'
  | 'TARSY_004'
  | 'TARSY_005'
  | 'TARSY_006'
  | 'TARSY_007'
  | 'TARSY_008'
  | 'TARSY_009'
  | 'TARSY_010'
  | 'TARSY_011'
  | 'TARSY_012'
  | 'TARSY_013'
  | 'TARSY_014'
  | 'TARSY_015'
  | 'TARSY_016'
  | 'TARSY_017'
  | 'TARSY_018'
  | 'PLAYER_001'
  | 'PLAYER_002'
  | 'PLAYER_003'
  | 'PLAYER_004'
  | 'PLAYER_005'
  | 'PLAYER_006'
  | 'PLAYER_007'
  | 'PLAYER_008'
  | 'PLAYER_009'
  | 'PLAYER_010'
  | 'PLAYER_011'
  | 'PLAYER_012'
  | 'PLAYER_013'
  | 'PLAYER_014'
  | 'PLAYER_015'
  | 'PLAYER_016'
  | 'SCAN_001'
  | 'SCAN_002'
  | 'SCAN_003'
  | 'SCAN_004'
  | 'SCAN_005'
  | 'SCAN_006'
  | 'SCAN_007'
  | 'SCAN_008'
  | 'SCAN_009'
  | 'SCAN_010'
  | 'SCAN_011'
  | 'SCAN_012'
  | 'SCAN_013'
  | 'SCAN_014'
  | 'SCAN_015'
  | 'SCAN_016'
  | 'SCAN_017'
  | 'SCAN_018'
  | 'INTERACT_001'
  | 'INTERACT_002'
  | 'INTERACT_003'
  | 'INTERACT_004'
  | 'INTERACT_005'
  | 'INTERACT_006'
  | 'INTERACT_007'
  | 'INTERACT_008'
  | 'INTERACT_009'
  | 'INTERACT_010'
  | 'INTERACT_011'
  | 'INTERACT_012'
  | 'INTERACT_013'
  | 'INTERACT_014'
  | 'SCAN_VAR_001'
  | 'SCAN_VAR_002'
  | 'SCAN_VAR_003'
  | 'SCAN_VAR_004'
  | 'SCAN_VAR_005'
  | 'SCAN_VAR_006'
  | 'SCAN_VAR_007'
  | 'UI_001'
  | 'UI_002'
  | 'UI_003'
  | 'UI_004'
  | 'UI_005'
  | 'UI_006'
  | 'UI_007'
  | 'UI_008'
  | 'UI_009'
  | 'UI_010'
  | 'UI_011'
  | 'UI_012'
  | 'UI_013'
  | 'UI_014'
  | 'UI_015'
  | 'UI_016'
  | 'UI_017'
  | 'UI_018'
  | 'VIKING_ARM_001'
  | 'VIKING_ARM_002'
  | 'VIKING_ARM_003'
  | 'VIKING_ARM_004'
  | 'VIKING_ARM_005'
  | 'VIKING_ARM_006'
  | 'VIKING_ARM_007'
  | 'VIKING_ARM_008'
  | 'VIKING_ARM_009'
  | 'VIKING_ARM_010'
  | 'VIKING_ARM_011'
  | 'VIKING_ARM_012'
  | 'SEISMO_001'
  | 'SEISMO_002'
  | 'SEISMO_003'
  | 'SEISMO_004'
  | 'SEISMO_005'
  | 'SEISMO_006'
  | 'SEISMO_007'
  | 'SEISMO_008'
  | 'HP3_001'
  | 'HP3_002'
  | 'HP3_003'
  | 'HP3_003B'
  | 'HP3_003C'
  | 'HP3_004'
  | 'HP3_005'
  | 'HP3_006'
  | 'HP3_007'
  | 'HP3_008'
  | 'HP3_009'
  | 'HP3_010'
  | 'HP3_011'
  | 'HP3_012'
  | 'HP3_013'
  | 'HP3_014'
  | 'ING_001'
  | 'ING_002'
  | 'ING_003'
  | 'ING_004'
  | 'ING_005'
  | 'ING_006'
  | 'ING_007'
  | 'ING_008'
  | 'ING_009'
  | 'ING_010'
  | 'ING_011'
  | 'ING_012'
  | 'ING_013'
  | 'ING_014'
  | 'PUZ_001'
  | 'PUZ_002'
  | 'PUZ_003'
  | 'PUZ_004'
  | 'PUZ_005'
  | 'PUZ_006'
  | 'PUZ_007'
  | 'PUZ_008'
  | 'PUZ_009'
  | 'PUZ_010'
  | 'PUZ_011'
  | 'PUZ_012'
  | 'PUZ_013'
  | 'PUZ_014'
  | 'PUZ_015'
  | 'PUZ_016'
  | 'PUZ_017'
  | 'PUZ_018'
  | 'DATA_001'
  | 'DATA_002'
  | 'DATA_003'
  | 'DATA_004'
  | 'DATA_005'
  | 'DATA_006'
  | 'DATA_007'
  | 'DATA_008'
  | 'DATA_009'
  | 'DATA_010'
  | 'DATA_011'
  | 'DATA_012'
  | 'DATA_013'
  | 'DATA_014'
  | 'DATA_015'
  | 'DATA_016'
  | 'MISSION_001'
  | 'MISSION_002'
  | 'MISSION_003'
  | 'MISSION_004'
  | 'MISSION_005'
  | 'MISSION_006'
  | 'MISSION_007'
  | 'MISSION_008'
  | 'MISSION_009'
  | 'MISSION_010'
  | 'MISSION_011'
  | 'MISSION_012'
  | 'SYS_001'
  | 'SYS_002'
  | 'SYS_003'
  | 'SYS_004'
  | 'SYS_005'
  | 'SYS_006'
  | 'SYS_007'
  | 'SYS_008'
  | 'SYS_009'
  | 'SYS_010'
  | 'SYS_011'
  | 'SYS_012'
  | 'ENV_CHRYSE_001'
  | 'ENV_CHRYSE_002'
  | 'ENV_CHRYSE_003'
  | 'ENV_ELYSIUM_001'
  | 'ENV_ELYSIUM_002'
  | 'ENV_ELYSIUM_003'
  | 'ENV_JEZERO_001'
  | 'ENV_JEZERO_002'
  | 'ENV_JEZERO_003'
  | 'GEN_001'
  | 'GEN_002'
  | 'GEN_003'
  | 'GEN_004'
  | 'GEN_005'
  | 'GEN_006'
  | 'GEN_007'
  | 'GEN_008'
  | 'GEN_009'
  | 'GEN_010';

export interface LastHopeAudioAsset {
  key: LastHopeSoundId;
  path: string;
  loop: boolean;
  channels: 1 | 2;
  durationSec: number;
}

export const LAST_HOPE_AUDIO_MANIFEST: Record<LastHopeSoundId, LastHopeAudioAsset> = {
  TARSY_001: { key: 'TARSY_001', path: 'audio/01_TARSY/TARSY_001_Robot_Power_On.wav', loop: false, channels: 1, durationSec: 1.35 },
  TARSY_002: { key: 'TARSY_002', path: 'audio/01_TARSY/TARSY_002_Robot_Power_Off.wav', loop: false, channels: 1, durationSec: 1.25 },
  TARSY_003: { key: 'TARSY_003', path: 'audio/01_TARSY/TARSY_003_Idle_Mechanical_Hum.wav', loop: true, channels: 1, durationSec: 4 },
  TARSY_004: { key: 'TARSY_004', path: 'audio/01_TARSY/TARSY_004_Wheel_Movement_Sand.wav', loop: true, channels: 1, durationSec: 3 },
  TARSY_005: { key: 'TARSY_005', path: 'audio/01_TARSY/TARSY_005_Wheel_Movement_Rocky_Ground.wav', loop: true, channels: 1, durationSec: 3 },
  TARSY_006: { key: 'TARSY_006', path: 'audio/01_TARSY/TARSY_006_Wheel_Movement_Hard_Ground.wav', loop: true, channels: 1, durationSec: 3 },
  TARSY_007: { key: 'TARSY_007', path: 'audio/01_TARSY/TARSY_007_Wheel_Turning.wav', loop: false, channels: 1, durationSec: 0.55 },
  TARSY_008: { key: 'TARSY_008', path: 'audio/01_TARSY/TARSY_008_Sudden_Braking.wav', loop: false, channels: 1, durationSec: 0.58 },
  TARSY_009: { key: 'TARSY_009', path: 'audio/01_TARSY/TARSY_009_Light_Collision.wav', loop: false, channels: 1, durationSec: 0.42 },
  TARSY_010: { key: 'TARSY_010', path: 'audio/01_TARSY/TARSY_010_Heavy_Collision.wav', loop: false, channels: 1, durationSec: 0.72 },
  TARSY_011: { key: 'TARSY_011', path: 'audio/01_TARSY/TARSY_011_Robotic_Arm_Extension.wav', loop: false, channels: 1, durationSec: 0.95 },
  TARSY_012: { key: 'TARSY_012', path: 'audio/01_TARSY/TARSY_012_Robotic_Arm_Retraction.wav', loop: false, channels: 1, durationSec: 0.9 },
  TARSY_013: { key: 'TARSY_013', path: 'audio/01_TARSY/TARSY_013_Gripper_Opening.wav', loop: false, channels: 1, durationSec: 0.38 },
  TARSY_014: { key: 'TARSY_014', path: 'audio/01_TARSY/TARSY_014_Gripper_Closing.wav', loop: false, channels: 1, durationSec: 0.4 },
  TARSY_015: { key: 'TARSY_015', path: 'audio/01_TARSY/TARSY_015_Tool_Attachment.wav', loop: false, channels: 1, durationSec: 0.65 },
  TARSY_016: { key: 'TARSY_016', path: 'audio/01_TARSY/TARSY_016_Mechanical_Movement.wav', loop: false, channels: 1, durationSec: 0.72 },
  TARSY_017: { key: 'TARSY_017', path: 'audio/01_TARSY/TARSY_017_Low_Battery.wav', loop: false, channels: 1, durationSec: 0.85 },
  TARSY_018: { key: 'TARSY_018', path: 'audio/01_TARSY/TARSY_018_Emergency_Shutdown.wav', loop: false, channels: 1, durationSec: 1.4 },
  PLAYER_001: { key: 'PLAYER_001', path: 'audio/02_PLAYER_ROBOT/PLAYER_001_Initial_Power_Activation.wav', loop: false, channels: 1, durationSec: 1.15 },
  PLAYER_002: { key: 'PLAYER_002', path: 'audio/02_PLAYER_ROBOT/PLAYER_002_Startup_Glitch.wav', loop: false, channels: 1, durationSec: 0.95 },
  PLAYER_003: { key: 'PLAYER_003', path: 'audio/02_PLAYER_ROBOT/PLAYER_003_System_Boot_Sequence.wav', loop: false, channels: 1, durationSec: 1.85 },
  PLAYER_004: { key: 'PLAYER_004', path: 'audio/02_PLAYER_ROBOT/PLAYER_004_Communication_Connected.wav', loop: false, channels: 1, durationSec: 0.55 },
  PLAYER_005: { key: 'PLAYER_005', path: 'audio/02_PLAYER_ROBOT/PLAYER_005_Communication_Disconnected.wav', loop: false, channels: 1, durationSec: 0.6 },
  PLAYER_006: { key: 'PLAYER_006', path: 'audio/02_PLAYER_ROBOT/PLAYER_006_Speaking_Notification.wav', loop: false, channels: 1, durationSec: 0.42 },
  PLAYER_007: { key: 'PLAYER_007', path: 'audio/02_PLAYER_ROBOT/PLAYER_007_Idle_Electronic_Hum.wav', loop: true, channels: 1, durationSec: 4 },
  PLAYER_008: { key: 'PLAYER_008', path: 'audio/02_PLAYER_ROBOT/PLAYER_008_Technical_Analysis.wav', loop: false, channels: 1, durationSec: 1.25 },
  PLAYER_009: { key: 'PLAYER_009', path: 'audio/02_PLAYER_ROBOT/PLAYER_009_Thinking_Processing.wav', loop: true, channels: 1, durationSec: 3 },
  PLAYER_010: { key: 'PLAYER_010', path: 'audio/02_PLAYER_ROBOT/PLAYER_010_Technical_Hint_Notification.wav', loop: false, channels: 1, durationSec: 0.65 },
  PLAYER_011: { key: 'PLAYER_011', path: 'audio/02_PLAYER_ROBOT/PLAYER_011_Warning_Notification.wav', loop: false, channels: 1, durationSec: 0.72 },
  PLAYER_012: { key: 'PLAYER_012', path: 'audio/02_PLAYER_ROBOT/PLAYER_012_Successful_Analysis.wav', loop: false, channels: 1, durationSec: 0.85 },
  PLAYER_013: { key: 'PLAYER_013', path: 'audio/02_PLAYER_ROBOT/PLAYER_013_Error_Detection.wav', loop: false, channels: 1, durationSec: 0.68 },
  PLAYER_014: { key: 'PLAYER_014', path: 'audio/02_PLAYER_ROBOT/PLAYER_014_Data_Synchronization.wav', loop: false, channels: 1, durationSec: 1.1 },
  PLAYER_015: { key: 'PLAYER_015', path: 'audio/02_PLAYER_ROBOT/PLAYER_015_Low_Battery_Warning.wav', loop: false, channels: 1, durationSec: 0.95 },
  PLAYER_016: { key: 'PLAYER_016', path: 'audio/02_PLAYER_ROBOT/PLAYER_016_Power_Down.wav', loop: false, channels: 1, durationSec: 1.1 },
  SCAN_001: { key: 'SCAN_001', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_001_Scanner_Activation.wav', loop: false, channels: 2, durationSec: 0.72 },
  SCAN_002: { key: 'SCAN_002', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_002_Scanner_Initial_Pulse.wav', loop: false, channels: 2, durationSec: 0.68 },
  SCAN_003: { key: 'SCAN_003', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_003_Continuous_Scanner_Sweep.wav', loop: true, channels: 2, durationSec: 3 },
  SCAN_004: { key: 'SCAN_004', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_004_Scanning_Nearby_Environment.wav', loop: false, channels: 2, durationSec: 1.65 },
  SCAN_005: { key: 'SCAN_005', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_005_Object_Detected.wav', loop: false, channels: 1, durationSec: 0.55 },
  SCAN_006: { key: 'SCAN_006', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_006_Unknown_Signal_Detected.wav', loop: false, channels: 2, durationSec: 0.85 },
  SCAN_007: { key: 'SCAN_007', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_007_Artifact_Identified.wav', loop: false, channels: 2, durationSec: 1.1 },
  SCAN_008: { key: 'SCAN_008', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_008_Signal_Strength_Increasing.wav', loop: false, channels: 1, durationSec: 1.05 },
  SCAN_009: { key: 'SCAN_009', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_009_Signal_Strength_Decreasing.wav', loop: false, channels: 1, durationSec: 1.05 },
  SCAN_010: { key: 'SCAN_010', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_010_Deep_Scan_Activation.wav', loop: false, channels: 2, durationSec: 1.1 },
  SCAN_011: { key: 'SCAN_011', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_011_Deep_Scan_Processing.wav', loop: true, channels: 2, durationSec: 3 },
  SCAN_012: { key: 'SCAN_012', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_012_Deep_Scan_Complete.wav', loop: false, channels: 2, durationSec: 0.95 },
  SCAN_013: { key: 'SCAN_013', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_013_Target_Locked.wav', loop: false, channels: 1, durationSec: 0.45 },
  SCAN_014: { key: 'SCAN_014', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_014_Scanner_Unable_Identify.wav', loop: false, channels: 1, durationSec: 0.8 },
  SCAN_015: { key: 'SCAN_015', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_015_Scanner_Lost_Signal.wav', loop: false, channels: 1, durationSec: 0.95 },
  SCAN_016: { key: 'SCAN_016', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_016_Environmental_Analysis.wav', loop: false, channels: 2, durationSec: 1.4 },
  SCAN_017: { key: 'SCAN_017', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_017_Material_Detection.wav', loop: false, channels: 1, durationSec: 0.72 },
  SCAN_018: { key: 'SCAN_018', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_018_Mechanical_Structure_Detection.wav', loop: false, channels: 1, durationSec: 0.85 },
  INTERACT_001: { key: 'INTERACT_001', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_001_Robot_Activates_Interaction_Mode.wav', loop: false, channels: 1, durationSec: 0.62 },
  INTERACT_002: { key: 'INTERACT_002', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_002_Object_Inspection_Start.wav', loop: false, channels: 1, durationSec: 0.5 },
  INTERACT_003: { key: 'INTERACT_003', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_003_Object_Inspection_Complete.wav', loop: false, channels: 1, durationSec: 0.6 },
  INTERACT_004: { key: 'INTERACT_004', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_004_Mechanical_Component_Identified.wav', loop: false, channels: 1, durationSec: 0.65 },
  INTERACT_005: { key: 'INTERACT_005', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_005_Electronic_Component_Identified.wav', loop: false, channels: 1, durationSec: 0.62 },
  INTERACT_006: { key: 'INTERACT_006', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_006_Data_Port_Connection.wav', loop: false, channels: 1, durationSec: 0.68 },
  INTERACT_007: { key: 'INTERACT_007', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_007_Data_Port_Access_Successful.wav', loop: false, channels: 1, durationSec: 0.78 },
  INTERACT_008: { key: 'INTERACT_008', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_008_Data_Port_Access_Denied.wav', loop: false, channels: 1, durationSec: 0.62 },
  INTERACT_009: { key: 'INTERACT_009', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_009_Electrical_Test.wav', loop: false, channels: 1, durationSec: 0.55 },
  INTERACT_010: { key: 'INTERACT_010', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_010_Mechanical_Test.wav', loop: false, channels: 1, durationSec: 0.75 },
  INTERACT_011: { key: 'INTERACT_011', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_011_Component_Manipulation.wav', loop: false, channels: 1, durationSec: 0.52 },
  INTERACT_012: { key: 'INTERACT_012', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_012_Evidence_Successfully_Collected.wav', loop: false, channels: 1, durationSec: 0.85 },
  INTERACT_013: { key: 'INTERACT_013', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_013_Interaction_Failed.wav', loop: false, channels: 1, durationSec: 0.58 },
  INTERACT_014: { key: 'INTERACT_014', path: 'audio/03_SCANNER_AND_EXPLORATION/INTERACT_014_Interaction_Confirmed.wav', loop: false, channels: 1, durationSec: 0.48 },
  SCAN_VAR_001: { key: 'SCAN_VAR_001', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_VAR_001_Finding_Something_New.wav', loop: false, channels: 2, durationSec: 0.88 },
  SCAN_VAR_002: { key: 'SCAN_VAR_002', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_VAR_002_Recognizing_NASA_Artifact.wav', loop: false, channels: 2, durationSec: 1.25 },
  SCAN_VAR_003: { key: 'SCAN_VAR_003', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_VAR_003_Discovering_Damaged_Component.wav', loop: false, channels: 2, durationSec: 0.92 },
  SCAN_VAR_004: { key: 'SCAN_VAR_004', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_VAR_004_Identifying_Possible_Failure.wav', loop: false, channels: 2, durationSec: 0.95 },
  SCAN_VAR_005: { key: 'SCAN_VAR_005', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_VAR_005_Finding_Hidden_Clue.wav', loop: false, channels: 2, durationSec: 0.98 },
  SCAN_VAR_006: { key: 'SCAN_VAR_006', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_VAR_006_Completing_Scan.wav', loop: false, channels: 2, durationSec: 0.78 },
  SCAN_VAR_007: { key: 'SCAN_VAR_007', path: 'audio/03_SCANNER_AND_EXPLORATION/SCAN_VAR_007_Accessing_Recovered_File.wav', loop: false, channels: 2, durationSec: 1.05 },
  UI_001: { key: 'UI_001', path: 'audio/04_UI_AND_MENUS/UI_001_Button_Hover.wav', loop: false, channels: 1, durationSec: 0.11 },
  UI_002: { key: 'UI_002', path: 'audio/04_UI_AND_MENUS/UI_002_Button_Click.wav', loop: false, channels: 1, durationSec: 0.14 },
  UI_003: { key: 'UI_003', path: 'audio/04_UI_AND_MENUS/UI_003_Button_Confirmation.wav', loop: false, channels: 1, durationSec: 0.28 },
  UI_004: { key: 'UI_004', path: 'audio/04_UI_AND_MENUS/UI_004_Back_Cancel.wav', loop: false, channels: 1, durationSec: 0.24 },
  UI_005: { key: 'UI_005', path: 'audio/04_UI_AND_MENUS/UI_005_Menu_Open.wav', loop: false, channels: 1, durationSec: 0.34 },
  UI_006: { key: 'UI_006', path: 'audio/04_UI_AND_MENUS/UI_006_Menu_Close.wav', loop: false, channels: 1, durationSec: 0.3 },
  UI_007: { key: 'UI_007', path: 'audio/04_UI_AND_MENUS/UI_007_Tab_Switch.wav', loop: false, channels: 1, durationSec: 0.16 },
  UI_008: { key: 'UI_008', path: 'audio/04_UI_AND_MENUS/UI_008_Popup_Notification.wav', loop: false, channels: 1, durationSec: 0.38 },
  UI_009: { key: 'UI_009', path: 'audio/04_UI_AND_MENUS/UI_009_Error_Notification.wav', loop: false, channels: 1, durationSec: 0.36 },
  UI_010: { key: 'UI_010', path: 'audio/04_UI_AND_MENUS/UI_010_Warning_Alert.wav', loop: false, channels: 1, durationSec: 0.45 },
  UI_011: { key: 'UI_011', path: 'audio/04_UI_AND_MENUS/UI_011_Mission_Unlock.wav', loop: false, channels: 1, durationSec: 0.65 },
  UI_012: { key: 'UI_012', path: 'audio/04_UI_AND_MENUS/UI_012_Loading_Complete.wav', loop: false, channels: 1, durationSec: 0.42 },
  UI_013: { key: 'UI_013', path: 'audio/04_UI_AND_MENUS/UI_013_Save_Complete.wav', loop: false, channels: 1, durationSec: 0.48 },
  UI_014: { key: 'UI_014', path: 'audio/04_UI_AND_MENUS/UI_014_Archive_Page_Open.wav', loop: false, channels: 1, durationSec: 0.25 },
  UI_015: { key: 'UI_015', path: 'audio/04_UI_AND_MENUS/UI_015_Inventory_Item_Selected.wav', loop: false, channels: 1, durationSec: 0.2 },
  UI_016: { key: 'UI_016', path: 'audio/04_UI_AND_MENUS/UI_016_Upgrade_Selected.wav', loop: false, channels: 1, durationSec: 0.35 },
  UI_017: { key: 'UI_017', path: 'audio/04_UI_AND_MENUS/UI_017_Settings_Changed.wav', loop: false, channels: 1, durationSec: 0.15 },
  UI_018: { key: 'UI_018', path: 'audio/04_UI_AND_MENUS/UI_018_Dialog_Continue.wav', loop: false, channels: 1, durationSec: 0.12 },
  VIKING_ARM_001: { key: 'VIKING_ARM_001', path: 'audio/05_VIKING_SAMPLER_ARM/VIKING_ARM_001_Boom_Extension.wav', loop: false, channels: 1, durationSec: 1.85 },
  VIKING_ARM_002: { key: 'VIKING_ARM_002', path: 'audio/05_VIKING_SAMPLER_ARM/VIKING_ARM_002_Boom_Retraction.wav', loop: false, channels: 1, durationSec: 1.75 },
  VIKING_ARM_003: { key: 'VIKING_ARM_003', path: 'audio/05_VIKING_SAMPLER_ARM/VIKING_ARM_003_Mechanical_Latch_Movement.wav', loop: false, channels: 1, durationSec: 0.65 },
  VIKING_ARM_004: { key: 'VIKING_ARM_004', path: 'audio/05_VIKING_SAMPLER_ARM/VIKING_ARM_004_Latch_Pin_Jam.wav', loop: false, channels: 1, durationSec: 0.72 },
  VIKING_ARM_005: { key: 'VIKING_ARM_005', path: 'audio/05_VIKING_SAMPLER_ARM/VIKING_ARM_005_Mechanical_Strain.wav', loop: false, channels: 1, durationSec: 1.25 },
  VIKING_ARM_006: { key: 'VIKING_ARM_006', path: 'audio/05_VIKING_SAMPLER_ARM/VIKING_ARM_006_Latch_Pin_Release.wav', loop: false, channels: 1, durationSec: 1.15 },
  VIKING_ARM_007: { key: 'VIKING_ARM_007', path: 'audio/05_VIKING_SAMPLER_ARM/VIKING_ARM_007_Metal_Pin_Dropping_Mars_Soil.wav', loop: false, channels: 1, durationSec: 0.68 },
  VIKING_ARM_008: { key: 'VIKING_ARM_008', path: 'audio/05_VIKING_SAMPLER_ARM/VIKING_ARM_008_Collector_Scoop_Movement.wav', loop: false, channels: 1, durationSec: 0.85 },
  VIKING_ARM_009: { key: 'VIKING_ARM_009', path: 'audio/05_VIKING_SAMPLER_ARM/VIKING_ARM_009_Soil_Scraping.wav', loop: false, channels: 1, durationSec: 1.35 },
  VIKING_ARM_010: { key: 'VIKING_ARM_010', path: 'audio/05_VIKING_SAMPLER_ARM/VIKING_ARM_010_Soil_Sample_Collection.wav', loop: false, channels: 1, durationSec: 0.95 },
  VIKING_ARM_011: { key: 'VIKING_ARM_011', path: 'audio/05_VIKING_SAMPLER_ARM/VIKING_ARM_011_Mechanical_Test_Successful.wav', loop: false, channels: 1, durationSec: 0.9 },
  VIKING_ARM_012: { key: 'VIKING_ARM_012', path: 'audio/05_VIKING_SAMPLER_ARM/VIKING_ARM_012_Historical_Recovery_Confirmed.wav', loop: false, channels: 2, durationSec: 1.3 },
  SEISMO_001: { key: 'SEISMO_001', path: 'audio/06_VIKING_SEISMOMETER/SEISMO_001_Instrument_Scan.wav', loop: false, channels: 1, durationSec: 0.95 },
  SEISMO_002: { key: 'SEISMO_002', path: 'audio/06_VIKING_SEISMOMETER/SEISMO_002_Electrical_Test_Pulse.wav', loop: false, channels: 1, durationSec: 0.55 },
  SEISMO_003: { key: 'SEISMO_003', path: 'audio/06_VIKING_SEISMOMETER/SEISMO_003_Caging_Mechanism_Click.wav', loop: false, channels: 1, durationSec: 0.4 },
  SEISMO_004: { key: 'SEISMO_004', path: 'audio/06_VIKING_SEISMOMETER/SEISMO_004_Failed_Release_Attempt.wav', loop: false, channels: 1, durationSec: 0.65 },
  SEISMO_005: { key: 'SEISMO_005', path: 'audio/06_VIKING_SEISMOMETER/SEISMO_005_Diagnostic_Signal.wav', loop: false, channels: 1, durationSec: 0.9 },
  SEISMO_006: { key: 'SEISMO_006', path: 'audio/06_VIKING_SEISMOMETER/SEISMO_006_Scientific_Measurement_Playback.wav', loop: false, channels: 1, durationSec: 2.2 },
  SEISMO_007: { key: 'SEISMO_007', path: 'audio/06_VIKING_SEISMOMETER/SEISMO_007_Viking_1_2_Data_Comparison.wav', loop: false, channels: 2, durationSec: 1.5 },
  SEISMO_008: { key: 'SEISMO_008', path: 'audio/06_VIKING_SEISMOMETER/SEISMO_008_Preservation_Confirmation.wav', loop: false, channels: 2, durationSec: 1 },
  HP3_001: { key: 'HP3_001', path: 'audio/07_HP3_MOLE/HP3_001_Mole_Activation.wav', loop: false, channels: 1, durationSec: 0.95 },
  HP3_002: { key: 'HP3_002', path: 'audio/07_HP3_MOLE/HP3_002_Hammering_Start.wav', loop: false, channels: 1, durationSec: 0.72 },
  HP3_003: { key: 'HP3_003', path: 'audio/07_HP3_MOLE/HP3_003_Continuous_Hammering_Loop.wav', loop: true, channels: 1, durationSec: 4 },
  HP3_003B: { key: 'HP3_003B', path: 'audio/07_HP3_MOLE/HP3_003B_Continuous_Hammering_Loop_Fast.wav', loop: true, channels: 1, durationSec: 4 },
  HP3_003C: { key: 'HP3_003C', path: 'audio/07_HP3_MOLE/HP3_003C_Continuous_Hammering_Loop_Hardpan.wav', loop: true, channels: 1, durationSec: 4 },
  HP3_004: { key: 'HP3_004', path: 'audio/07_HP3_MOLE/HP3_004_Hammering_Stop.wav', loop: false, channels: 1, durationSec: 0.65 },
  HP3_005: { key: 'HP3_005', path: 'audio/07_HP3_MOLE/HP3_005_Soil_Movement.wav', loop: false, channels: 1, durationSec: 1.1 },
  HP3_006: { key: 'HP3_006', path: 'audio/07_HP3_MOLE/HP3_006_Soil_Crumbling.wav', loop: false, channels: 1, durationSec: 1 },
  HP3_007: { key: 'HP3_007', path: 'audio/07_HP3_MOLE/HP3_007_Penetration_Progress.wav', loop: false, channels: 1, durationSec: 0.78 },
  HP3_008: { key: 'HP3_008', path: 'audio/07_HP3_MOLE/HP3_008_Penetration_Failure.wav', loop: false, channels: 1, durationSec: 0.85 },
  HP3_009: { key: 'HP3_009', path: 'audio/07_HP3_MOLE/HP3_009_Tether_Movement.wav', loop: false, channels: 1, durationSec: 0.75 },
  HP3_010: { key: 'HP3_010', path: 'audio/07_HP3_MOLE/HP3_010_Robotic_Arm_Scoop_Movement.wav', loop: false, channels: 1, durationSec: 1.05 },
  HP3_011: { key: 'HP3_011', path: 'audio/07_HP3_MOLE/HP3_011_Soil_Pinning_Operation.wav', loop: false, channels: 1, durationSec: 1.25 },
  HP3_012: { key: 'HP3_012', path: 'audio/07_HP3_MOLE/HP3_012_Recovery_Attempt.wav', loop: false, channels: 1, durationSec: 1.1 },
  HP3_013: { key: 'HP3_013', path: 'audio/07_HP3_MOLE/HP3_013_Temperature_Data_Retrieved.wav', loop: false, channels: 1, durationSec: 0.9 },
  HP3_014: { key: 'HP3_014', path: 'audio/07_HP3_MOLE/HP3_014_Mole_Inactive.wav', loop: false, channels: 1, durationSec: 0.65 },
  ING_001: { key: 'ING_001', path: 'audio/08_INGENUITY/ING_001_Rotor_Startup.wav', loop: false, channels: 2, durationSec: 1.9 },
  ING_002: { key: 'ING_002', path: 'audio/08_INGENUITY/ING_002_Rotor_Spinning_Loop.wav', loop: true, channels: 2, durationSec: 3 },
  ING_003: { key: 'ING_003', path: 'audio/08_INGENUITY/ING_003_Rotor_Shutdown.wav', loop: false, channels: 2, durationSec: 2 },
  ING_004: { key: 'ING_004', path: 'audio/08_INGENUITY/ING_004_Rotor_Acceleration.wav', loop: false, channels: 2, durationSec: 1.25 },
  ING_005: { key: 'ING_005', path: 'audio/08_INGENUITY/ING_005_Helicopter_Takeoff.wav', loop: false, channels: 2, durationSec: 1.65 },
  ING_006: { key: 'ING_006', path: 'audio/08_INGENUITY/ING_006_Helicopter_Hover.wav', loop: true, channels: 2, durationSec: 4 },
  ING_007: { key: 'ING_007', path: 'audio/08_INGENUITY/ING_007_Helicopter_Landing.wav', loop: false, channels: 2, durationSec: 1.55 },
  ING_008: { key: 'ING_008', path: 'audio/08_INGENUITY/ING_008_Rotor_Imbalance.wav', loop: false, channels: 2, durationSec: 1.35 },
  ING_009: { key: 'ING_009', path: 'audio/08_INGENUITY/ING_009_Rotor_Blade_Damage.wav', loop: false, channels: 2, durationSec: 1.15 },
  ING_010: { key: 'ING_010', path: 'audio/08_INGENUITY/ING_010_Emergency_Landing.wav', loop: false, channels: 2, durationSec: 1.5 },
  ING_011: { key: 'ING_011', path: 'audio/08_INGENUITY/ING_011_Flight_Data_Retrieved.wav', loop: false, channels: 1, durationSec: 0.78 },
  ING_012: { key: 'ING_012', path: 'audio/08_INGENUITY/ING_012_Navigation_Data_Analysis.wav', loop: false, channels: 1, durationSec: 1.05 },
  ING_013: { key: 'ING_013', path: 'audio/08_INGENUITY/ING_013_Flight_Timeline_Event_Selected.wav', loop: false, channels: 1, durationSec: 0.28 },
  ING_014: { key: 'ING_014', path: 'audio/08_INGENUITY/ING_014_Damaged_Helicopter_Inspection.wav', loop: false, channels: 2, durationSec: 1.15 },
  PUZ_001: { key: 'PUZ_001', path: 'audio/09_PUZZLES/PUZ_001_Puzzle_Start.wav', loop: false, channels: 1, durationSec: 0.52 },
  PUZ_002: { key: 'PUZ_002', path: 'audio/09_PUZZLES/PUZ_002_Evidence_Discovered.wav', loop: false, channels: 1, durationSec: 0.48 },
  PUZ_003: { key: 'PUZ_003', path: 'audio/09_PUZZLES/PUZ_003_Evidence_Selected.wav', loop: false, channels: 1, durationSec: 0.22 },
  PUZ_004: { key: 'PUZ_004', path: 'audio/09_PUZZLES/PUZ_004_Evidence_Connected.wav', loop: false, channels: 1, durationSec: 0.36 },
  PUZ_005: { key: 'PUZ_005', path: 'audio/09_PUZZLES/PUZ_005_Correct_Answer.wav', loop: false, channels: 1, durationSec: 0.62 },
  PUZ_006: { key: 'PUZ_006', path: 'audio/09_PUZZLES/PUZ_006_Incorrect_Answer.wav', loop: false, channels: 1, durationSec: 0.45 },
  PUZ_007: { key: 'PUZ_007', path: 'audio/09_PUZZLES/PUZ_007_Hint_Activated.wav', loop: false, channels: 1, durationSec: 0.45 },
  PUZ_008: { key: 'PUZ_008', path: 'audio/09_PUZZLES/PUZ_008_Command_Selected.wav', loop: false, channels: 1, durationSec: 0.22 },
  PUZ_009: { key: 'PUZ_009', path: 'audio/09_PUZZLES/PUZ_009_Command_Placed_Sequence.wav', loop: false, channels: 1, durationSec: 0.26 },
  PUZ_010: { key: 'PUZ_010', path: 'audio/09_PUZZLES/PUZ_010_Sequence_Error.wav', loop: false, channels: 1, durationSec: 0.52 },
  PUZ_011: { key: 'PUZ_011', path: 'audio/09_PUZZLES/PUZ_011_Mechanism_Activated.wav', loop: false, channels: 1, durationSec: 0.58 },
  PUZ_012: { key: 'PUZ_012', path: 'audio/09_PUZZLES/PUZ_012_Mechanism_Failed.wav', loop: false, channels: 1, durationSec: 0.55 },
  PUZ_013: { key: 'PUZ_013', path: 'audio/09_PUZZLES/PUZ_013_Puzzle_Completed.wav', loop: false, channels: 2, durationSec: 0.92 },
  PUZ_014: { key: 'PUZ_014', path: 'audio/09_PUZZLES/PUZ_014_Final_Decision_Confirmed.wav', loop: false, channels: 1, durationSec: 0.72 },
  PUZ_015: { key: 'PUZ_015', path: 'audio/09_PUZZLES/PUZ_015_Diagnostic_Result_Revealed.wav', loop: false, channels: 1, durationSec: 0.58 },
  PUZ_016: { key: 'PUZ_016', path: 'audio/09_PUZZLES/PUZ_016_Historical_Record_Reconstructed.wav', loop: false, channels: 2, durationSec: 0.95 },
  PUZ_017: { key: 'PUZ_017', path: 'audio/09_PUZZLES/PUZ_017_Engineering_Blueprint_Unlocked.wav', loop: false, channels: 2, durationSec: 0.85 },
  PUZ_018: { key: 'PUZ_018', path: 'audio/09_PUZZLES/PUZ_018_Recovery_Strategy_Selected.wav', loop: false, channels: 1, durationSec: 0.42 },
  DATA_001: { key: 'DATA_001', path: 'audio/10_DATA_RECOVERY/DATA_001_Data_Port_Connection.wav', loop: false, channels: 1, durationSec: 0.58 },
  DATA_002: { key: 'DATA_002', path: 'audio/10_DATA_RECOVERY/DATA_002_Data_Transfer_Start.wav', loop: false, channels: 1, durationSec: 0.78 },
  DATA_003: { key: 'DATA_003', path: 'audio/10_DATA_RECOVERY/DATA_003_Continuous_Data_Transfer_Loop.wav', loop: true, channels: 1, durationSec: 4 },
  DATA_004: { key: 'DATA_004', path: 'audio/10_DATA_RECOVERY/DATA_004_File_Recovered.wav', loop: false, channels: 1, durationSec: 0.65 },
  DATA_005: { key: 'DATA_005', path: 'audio/10_DATA_RECOVERY/DATA_005_File_Corrupted.wav', loop: false, channels: 1, durationSec: 0.75 },
  DATA_006: { key: 'DATA_006', path: 'audio/10_DATA_RECOVERY/DATA_006_Partial_Data_Recovery.wav', loop: false, channels: 1, durationSec: 0.85 },
  DATA_007: { key: 'DATA_007', path: 'audio/10_DATA_RECOVERY/DATA_007_Complete_Data_Recovery.wav', loop: false, channels: 2, durationSec: 1.1 },
  DATA_008: { key: 'DATA_008', path: 'audio/10_DATA_RECOVERY/DATA_008_Archive_Unlocked.wav', loop: false, channels: 2, durationSec: 0.92 },
  DATA_009: { key: 'DATA_009', path: 'audio/10_DATA_RECOVERY/DATA_009_Archive_Page_Switch.wav', loop: false, channels: 1, durationSec: 0.24 },
  DATA_010: { key: 'DATA_010', path: 'audio/10_DATA_RECOVERY/DATA_010_Blueprint_Unlocked.wav', loop: false, channels: 2, durationSec: 0.85 },
  DATA_011: { key: 'DATA_011', path: 'audio/10_DATA_RECOVERY/DATA_011_Historical_Record_Verified.wav', loop: false, channels: 1, durationSec: 0.78 },
  DATA_012: { key: 'DATA_012', path: 'audio/10_DATA_RECOVERY/DATA_012_Unknown_Information_Detected.wav', loop: false, channels: 1, durationSec: 0.8 },
  DATA_013: { key: 'DATA_013', path: 'audio/10_DATA_RECOVERY/DATA_013_Missing_Data_Fragment.wav', loop: false, channels: 1, durationSec: 0.62 },
  DATA_014: { key: 'DATA_014', path: 'audio/10_DATA_RECOVERY/DATA_014_Data_Synchronization_Complete.wav', loop: false, channels: 1, durationSec: 0.85 },
  DATA_015: { key: 'DATA_015', path: 'audio/10_DATA_RECOVERY/DATA_015_Knowledge_Points_Earned.wav', loop: false, channels: 1, durationSec: 0.55 },
  DATA_016: { key: 'DATA_016', path: 'audio/10_DATA_RECOVERY/DATA_016_Scientific_Archive_Completed.wav', loop: false, channels: 2, durationSec: 1.5 },
  MISSION_001: { key: 'MISSION_001', path: 'audio/11_MISSIONS/MISSION_001_Mission_Accepted.wav', loop: false, channels: 1, durationSec: 0.72 },
  MISSION_002: { key: 'MISSION_002', path: 'audio/11_MISSIONS/MISSION_002_Mission_Deployment.wav', loop: false, channels: 2, durationSec: 1.25 },
  MISSION_003: { key: 'MISSION_003', path: 'audio/11_MISSIONS/MISSION_003_Location_Arrival.wav', loop: false, channels: 2, durationSec: 1.05 },
  MISSION_004: { key: 'MISSION_004', path: 'audio/11_MISSIONS/MISSION_004_Objective_Updated.wav', loop: false, channels: 1, durationSec: 0.48 },
  MISSION_005: { key: 'MISSION_005', path: 'audio/11_MISSIONS/MISSION_005_Artifact_Discovered.wav', loop: false, channels: 2, durationSec: 1.2 },
  MISSION_006: { key: 'MISSION_006', path: 'audio/11_MISSIONS/MISSION_006_Recovery_Successful.wav', loop: false, channels: 2, durationSec: 1.15 },
  MISSION_007: { key: 'MISSION_007', path: 'audio/11_MISSIONS/MISSION_007_Mission_Completed.wav', loop: false, channels: 2, durationSec: 1.65 },
  MISSION_008: { key: 'MISSION_008', path: 'audio/11_MISSIONS/MISSION_008_Mission_Failed.wav', loop: false, channels: 2, durationSec: 1.3 },
  MISSION_009: { key: 'MISSION_009', path: 'audio/11_MISSIONS/MISSION_009_Mission_Report_Generated.wav', loop: false, channels: 1, durationSec: 0.85 },
  MISSION_010: { key: 'MISSION_010', path: 'audio/11_MISSIONS/MISSION_010_New_Mission_Unlocked.wav', loop: false, channels: 2, durationSec: 0.88 },
  MISSION_011: { key: 'MISSION_011', path: 'audio/11_MISSIONS/MISSION_011_Return_to_Headquarters.wav', loop: false, channels: 2, durationSec: 1.1 },
  MISSION_012: { key: 'MISSION_012', path: 'audio/11_MISSIONS/MISSION_012_New_Knowledge_Available.wav', loop: false, channels: 1, durationSec: 0.62 },
  SYS_001: { key: 'SYS_001', path: 'audio/12_SYSTEM_WARNINGS/SYS_001_Battery_Low.wav', loop: false, channels: 1, durationSec: 0.72 },
  SYS_002: { key: 'SYS_002', path: 'audio/12_SYSTEM_WARNINGS/SYS_002_Battery_Critical.wav', loop: false, channels: 1, durationSec: 0.95 },
  SYS_003: { key: 'SYS_003', path: 'audio/12_SYSTEM_WARNINGS/SYS_003_Battery_Charging.wav', loop: false, channels: 1, durationSec: 0.95 },
  SYS_004: { key: 'SYS_004', path: 'audio/12_SYSTEM_WARNINGS/SYS_004_Battery_Fully_Charged.wav', loop: false, channels: 1, durationSec: 0.72 },
  SYS_005: { key: 'SYS_005', path: 'audio/12_SYSTEM_WARNINGS/SYS_005_Structural_Damage.wav', loop: false, channels: 1, durationSec: 0.85 },
  SYS_006: { key: 'SYS_006', path: 'audio/12_SYSTEM_WARNINGS/SYS_006_Critical_System_Warning.wav', loop: false, channels: 1, durationSec: 1.05 },
  SYS_007: { key: 'SYS_007', path: 'audio/12_SYSTEM_WARNINGS/SYS_007_Tool_Damage.wav', loop: false, channels: 1, durationSec: 0.65 },
  SYS_008: { key: 'SYS_008', path: 'audio/12_SYSTEM_WARNINGS/SYS_008_Storage_Almost_Full.wav', loop: false, channels: 1, durationSec: 0.62 },
  SYS_009: { key: 'SYS_009', path: 'audio/12_SYSTEM_WARNINGS/SYS_009_Storage_Full.wav', loop: false, channels: 1, durationSec: 0.68 },
  SYS_010: { key: 'SYS_010', path: 'audio/12_SYSTEM_WARNINGS/SYS_010_Emergency_Shutdown.wav', loop: false, channels: 1, durationSec: 1.45 },
  SYS_011: { key: 'SYS_011', path: 'audio/12_SYSTEM_WARNINGS/SYS_011_Communication_Interference.wav', loop: false, channels: 2, durationSec: 0.95 },
  SYS_012: { key: 'SYS_012', path: 'audio/12_SYSTEM_WARNINGS/SYS_012_Overheating_Warning.wav', loop: false, channels: 1, durationSec: 0.85 },
  ENV_CHRYSE_001: { key: 'ENV_CHRYSE_001', path: 'audio/13_MARS_AMBIENCE/ENV_CHRYSE_001_Light_Martian_Wind.wav', loop: true, channels: 2, durationSec: 12 },
  ENV_CHRYSE_002: { key: 'ENV_CHRYSE_002', path: 'audio/13_MARS_AMBIENCE/ENV_CHRYSE_002_Abandoned_Lander_Creaks.wav', loop: true, channels: 2, durationSec: 14 },
  ENV_CHRYSE_003: { key: 'ENV_CHRYSE_003', path: 'audio/13_MARS_AMBIENCE/ENV_CHRYSE_003_Subtle_Dust_Movement.wav', loop: true, channels: 2, durationSec: 12 },
  ENV_ELYSIUM_001: { key: 'ENV_ELYSIUM_001', path: 'audio/13_MARS_AMBIENCE/ENV_ELYSIUM_001_Soft_Martian_Wind.wav', loop: true, channels: 2, durationSec: 12 },
  ENV_ELYSIUM_002: { key: 'ENV_ELYSIUM_002', path: 'audio/13_MARS_AMBIENCE/ENV_ELYSIUM_002_Low_Environmental_Rumble.wav', loop: true, channels: 2, durationSec: 14 },
  ENV_ELYSIUM_003: { key: 'ENV_ELYSIUM_003', path: 'audio/13_MARS_AMBIENCE/ENV_ELYSIUM_003_Subtle_Mechanical_Vibrations.wav', loop: true, channels: 2, durationSec: 12 },
  ENV_JEZERO_001: { key: 'ENV_JEZERO_001', path: 'audio/13_MARS_AMBIENCE/ENV_JEZERO_001_Open_Martian_Wind.wav', loop: true, channels: 2, durationSec: 14 },
  ENV_JEZERO_002: { key: 'ENV_JEZERO_002', path: 'audio/13_MARS_AMBIENCE/ENV_JEZERO_002_Sand_Ripple_Dust_Gusts.wav', loop: true, channels: 2, durationSec: 14 },
  ENV_JEZERO_003: { key: 'ENV_JEZERO_003', path: 'audio/13_MARS_AMBIENCE/ENV_JEZERO_003_Quiet_Crater_Ambience.wav', loop: true, channels: 2, durationSec: 12 },
  GEN_001: { key: 'GEN_001', path: 'audio/14_GENERAL_INTERACTIONS/GEN_001_Item_Collected.wav', loop: false, channels: 1, durationSec: 0.45 },
  GEN_002: { key: 'GEN_002', path: 'audio/14_GENERAL_INTERACTIONS/GEN_002_Evidence_Added.wav', loop: false, channels: 1, durationSec: 0.48 },
  GEN_003: { key: 'GEN_003', path: 'audio/14_GENERAL_INTERACTIONS/GEN_003_Knowledge_Points_Earned.wav', loop: false, channels: 1, durationSec: 0.56 },
  GEN_004: { key: 'GEN_004', path: 'audio/14_GENERAL_INTERACTIONS/GEN_004_Upgrade_Available.wav', loop: false, channels: 1, durationSec: 0.52 },
  GEN_005: { key: 'GEN_005', path: 'audio/14_GENERAL_INTERACTIONS/GEN_005_Upgrade_Completed.wav', loop: false, channels: 1, durationSec: 0.85 },
  GEN_006: { key: 'GEN_006', path: 'audio/14_GENERAL_INTERACTIONS/GEN_006_Checkpoint_Saved.wav', loop: false, channels: 1, durationSec: 0.42 },
  GEN_007: { key: 'GEN_007', path: 'audio/14_GENERAL_INTERACTIONS/GEN_007_Interaction_Denied.wav', loop: false, channels: 1, durationSec: 0.34 },
  GEN_008: { key: 'GEN_008', path: 'audio/14_GENERAL_INTERACTIONS/GEN_008_Optional_Objective_Completed.wav', loop: false, channels: 2, durationSec: 0.78 },
  GEN_009: { key: 'GEN_009', path: 'audio/14_GENERAL_INTERACTIONS/GEN_009_Achievement_Unlocked.wav', loop: false, channels: 2, durationSec: 1.05 },
  GEN_010: { key: 'GEN_010', path: 'audio/14_GENERAL_INTERACTIONS/GEN_010_Mission_Exit_Confirmed.wav', loop: false, channels: 1, durationSec: 0.68 },
};

/**
 * Call inside a Phaser 4 Scene preload() method.
 * Assumes the exported library folders live under public/audio/ (e.g. public/audio/01_TARSY/...).
 */
export function preloadLastHopeAudio(
  loader: { audio: (key: string, urls: string) => void },
  basePath = ''
): void {
  const prefix = basePath ? basePath.replace(/\/$/, '') + '/' : '';
  for (const asset of Object.values(LAST_HOPE_AUDIO_MANIFEST)) {
    loader.audio(asset.key, `${prefix}${asset.path}`);
  }
}
