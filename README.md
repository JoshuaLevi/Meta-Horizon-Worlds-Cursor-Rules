# Horizon Worlds – Cursor AI Setup

Deze map is een kant-en-klare ontwikkelomgeving voor Meta Horizon Worlds (Desktop Editor + TypeScript) projecten in **Cursor**.  
Het bevat:
- **Projectregels** in `.cursor/rules/` die Cursor sturen om altijd jouw lokale documentatie en voorbeelden te gebruiken.
- **Lokale kennisbronnen** (`horizon-worlds-rules/`) met externe repos vol voorbeeldcode en documentatie.
- Een `.cursorignore` om ruis en zware bestanden te vermijden.

---

## 📂 Mappenstructuur
/.cursor/rules/                      # Cursor Rules – bepalen AI gedrag
00-project-context.mdc              # Context: stack, doelen, outputverwachting
01-hw-style-guide.mdc               # Stijl- en naming-conventies
02-docs-precedence.mdc              # Altijd lokale HW-docs/snippets prefereren
03-ts-globs.mdc                     # Regels voor TS-bestanden
04-testing-playbook.mdc             # Test- en reviewchecklist
05-hw-api-events-materials.mdc      # Samenvatting Entity API / Events / Materials / Utils
06-hw-api-index.mdc                 # Domein index (Analytics/Player/Camera/NavMesh/AvatarAI/UI)
07-hw-api-url-index.mdc            # Volledige 2.0.0 API URL index (categorised)
08-hw-stubs-and-scaffolds.mdc      # Uitleg & prompts voor lokale stubs en scaffolds

/horizon-worlds-rules/                # Lokale Horizon Worlds kennisbronnen
HorizonWorldsSnippets-main/         # Snippets en patterns
MetaWorldsSkydomeCapture-main/      # Sky dome capture scripts
worlds-documentation-main/          # Documentatie (HTML/JS/CSS)
worlds-documentation-main-2/        # Extra documentatie
00 TS Utils/                        # Vidyuu utility scripts (motion, colors, arrays, popups, actions)
stubs/                              # Type stubs voor kern-API's (offline hints)
scaffolds/                          # Kleine helpers/managers voor snelle start

.cursorignore                         # Bestanden uitsluiten van indexering
README.md                             # Deze handleiding

---

## 🚀 Gebruik in Cursor

1. **Project openen**
   - Open deze map in Cursor.
   - Cursor indexeert automatisch alle bestanden behalve wat in `.cursorignore` staat.

2. **Controleren**
   - Ga naar *Settings → Indexing & Docs* in Cursor en check of alle mappen worden geïndexeerd.
   - In `.cursorignore` kun je zelf nog extra uitsluitingen toevoegen als nodig.

3. **Prompts geven**
   - Verwijs direct naar bestanden om specifieke info/snippets te krijgen:
     - `@workspace HorizonWorldsSnippets-main/Snippets/PlayerManager.ts`
     - `@workspace worlds-documentation-main/docs/events.md`
   - Vraag bijvoorbeeld:
     > "Maak een eventlistener zoals in `HorizonWorldsSnippets-main/Snippets/EventBus.ts`, maar voor player join/leave."

4. **Rules checken**
   - In *@Cursor Rules* kun je zien dat `02-docs-precedence.mdc` actief is.
   - Dit zorgt ervoor dat Cursor eerst in je lokale mappen kijkt voordat het externe bronnen gebruikt.

---

## 🔄 Hergebruik in andere projecten

1. Kopieer deze mappen en bestanden naar de root van je nieuwe project:
   - `.cursor/`
   - `horizon-worlds-rules/`
   - `.cursorignore`
   - `README.md` (optioneel)
2. Open het nieuwe project in Cursor.
3. Klaar — Cursor gebruikt direct dezelfde rules en documentatie.

💡 Tip: Zet deze setup in een **GitHub template repository**.  
Zo kun je altijd starten met:
```bash
git clone https://github.com/JoshuaLevi/Meta-Horizon-Worlds-Cursor-Rules.git my-horizon-world




All the API reference links:
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbodebug
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_action
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_analyticssectiongamemode
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_gamestateenum
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_participationenum
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_abilitydequippayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_abilityequippayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_abilityusedpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_areaenterpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_areaexitpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_armordequippayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_armorequippayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_customactiondata
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_customeventpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_damageenemypayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_damageplayerpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_deathbyenemypayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_deathbyplayerpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_deathpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_discoverymadepayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_eventdata
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_eventvaluetype
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_frictioncausedpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_frictionhitpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_gameroundendforplayerspayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_gameroundstartforplayerspayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_koenemypayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_koplayerpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_leveluppayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_playerreadyenterpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_playerreadyexitpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_questcompletedpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_rewardsearnedpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_roundendpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_roundstartpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_sectionendpayloadhttps://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_sectionstartpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_stageendpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_stagestartpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_taskendpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_taskstartpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_taskstependpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_taskstepstartpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_weaponequippayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_weapongrabpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_weaponreleasepayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_wearableequippayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_wearablereleasepayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbo
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbodataservice
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbodefaultsettings
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turboevents
https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_analytics
https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentgrabbableinteraction
https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentlocomotion
https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_avataraiagent
https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentgrabactionresult
https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentlocomotionresult
https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentspawnresult
https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentlocomotionoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentrotationoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_apiname
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_attachcameramode
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_camera
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_firstpersoncameramode
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_fixedcameramode
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_followcameramode
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_orbitcameramode
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_pancameramode
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_thirdpersoncameramode
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_cameramode
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_cameratransitionendreason
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_easing
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_icameramode
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_attachcameraoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_cameratarget
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_cameratransitionoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_fixedcameraoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_followcameraoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_forcelookatoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_orbitcameraoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_pancameraoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_stoplookatoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_apiname
https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_localcamera
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_basetestcomponent
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_aiagentgizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_achievementsgizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animatedentity
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_asset
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_assetcontentdata
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_assetpoolgizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_attachableentity
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_audiogizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatarposegizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_bounds
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevent
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_color
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_dynamiclightgizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_focusedinteraction
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_grabbableentity
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_horizonproperty
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_horizonreferenceproperty
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_iwpsellergizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_inworldpurchase
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_localevent
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_materialasset
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_meshentity
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_networkevent
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlegizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_physicalentity
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerbodypart
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrols
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerhand
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinput
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_projectilelaunchergizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_quaternion
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycastgizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_rect
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawncontroller
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawncontrollerbase
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawnpointgizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_textgizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_textureasset
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_trailgizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_transform
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_triggergizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_worldinventory
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallbackreasons
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_attachableplayeranchor
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_audibilitymode
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avataranimationmask
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatargrippose
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatargripposeanimationnames
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatarposeusemode
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_buttonicon
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_buttonplacement
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entityinteractionmode
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitynamematchoperation
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitytagmatchoperation
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_eulerorder
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_eventtargettype
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_handedness
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_hapticsharpness
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_hapticstrength
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_layertype
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_monetizationtimeoption
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_physicsforcemode
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerbodyparttype
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerdevicetype
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinputaction
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playervisibilitymode
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycasttargettype
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_space
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawnerror
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawnstate
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_tooltipanchorlocation
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_assert
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_clamp
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_degreestoradians
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_radianstodegrees
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_class
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_comparable
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_copyable
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_disposableobject
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_disposeoperationregistration
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitystyle
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_eventsubscription
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_ileaderboards
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_ipersistentstorage
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_ipersistentstorageworld
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_iteam
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_iui
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerentitlement
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_readablehorizonproperty
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_writablehorizonproperty
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_aimassistoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallback
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallbackreason
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_audiooptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatargripposeanimationcallback
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_baseraycasthit
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_builtinvariabletype
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_componentwithconstructor
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_disposeoperation
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entityraycasthit
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_fetchasdataoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_findentitiesoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_focusuioptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_focusedinteractionoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_focusedinteractiontapoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_focusedinteractiontrailoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_inworldpurchasable
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_inworldpurchasableprice
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_infoslide
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_infoslidestyle
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_interactioninfo
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_launchprojectileoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_onplayerpurchaseditemeventpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxplayoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxsetparameteroptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxstopoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_persistentserializablestate
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playanimationoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playavatargripposeanimationoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrolsconnectoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinputstatechangecallback
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerraycasthit
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_popupoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_propsdefinitionfromcomponent
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_propsfromdefinitions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycasthit
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycastoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_serializablestate
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_setmaterialoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_setmeshoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_settextureoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_springoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_staticraycasthit
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_stopanimationoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_throwoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_tooltiplineattachmentproperties
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_tooltipoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vfxparameter
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vfxparametertype
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_voipsetting
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_apiversion
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevents
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_defaultfetchasdataoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_defaultfindentitiesoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_defaultfocusedinteractionenableoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_defaultfocusedinteractiontapoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_defaultfocusedinteractiontrailoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_defaultpopupoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_defaultspringoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_defaultthrowoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_defaulttooltipoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_inworldshophelpers
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_proptypes
https://developers.meta.com/horizon-worlds/reference/2.0.0/core_voipsettingvalues
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_gestureevent
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_gestures
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_gesturesoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_swipedirection
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_longtapeventdata
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_paneventdata
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_pincheventdata
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_swipeeventdata
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_tapeventdata
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_toucheventdata
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchinfo
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchphase
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchstate
https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_apiname
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmesh
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshagent
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshmanager
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshagentalignment
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshstate
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_inavmes
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_inavmeshagent
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshbakeinfo
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshdetailedpath
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshhit
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshinstanceinfo
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshpath
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshprofile
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshwaypoint
https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_apiname
https://developers.meta.com/horizon-worlds/reference/2.0.0/npc_npc
https://developers.meta.com/horizon-worlds/reference/2.0.0/npc_npcconversation
https://developers.meta.com/horizon-worlds/reference/2.0.0/npc_npcengagementphase
https://developers.meta.com/horizon-worlds/reference/2.0.0/npc_npcerrorcategory
https://developers.meta.com/horizon-worlds/reference/2.0.0/npc_viseme
https://developers.meta.com/horizon-worlds/reference/2.0.0/npc_npcattentiontarget
https://developers.meta.com/horizon-worlds/reference/2.0.0/npc_npcaudiosettings
https://developers.meta.com/horizon-worlds/reference/2.0.0/npc_apiname
https://developers.meta.com/horizon-worlds/reference/2.0.0/npc_npcevents
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_countsampler
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_custommetricsbuffer
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_custommetricscoordinator
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_durationsampler
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizoncountsampler
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizondurationsampler
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizonmarkersampler
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizonperformancemetricconfig
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizontraceevent
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_markersampler
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizonmetricsuffixes
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizontraceeventtype
https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_apiname
https://developers.meta.com/horizon-worlds/reference/2.0.0/social_social
https://developers.meta.com/horizon-worlds/reference/2.0.0/social_avatarimagetype
https://developers.meta.com/horizon-worlds/reference/2.0.0/social_followstatus
https://developers.meta.com/horizon-worlds/reference/2.0.0/social_iavatarimageoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/social_apiname
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animation_2
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uicomponent
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_valuebindingbase
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedinterpolation
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_binding
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_easing
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_imagesource
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uigizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uinode
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_avatarimageexpressions
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_dynamiclist
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_image_2
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_pressable
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_scrollview
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_text_2
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_view
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_bindable
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_bindingset
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_borderstyle
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_callback
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_callbackmap
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_callbackwithpayload
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_colorvalue
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_conditionalprops
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_dimensionvalue
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_dynamiclistprops
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_fontfamily
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_imageprops
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_imagestyle
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_layoutstyle
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_pressableprops
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_scrollviewprops
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_shadowstyle
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_textprops
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_textstyle
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_timinganimationconfig
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_transformstyle
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uichildren
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_viewprops
https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_viewstyle
https://developers.meta.com/horizon-worlds/reference/2.0.0/unity_asset_bundles_assetbundlegizmo
https://developers.meta.com/horizon-worlds/reference/2.0.0/unity_asset_bundles_assetbundleinstancereference
https://developers.meta.com/horizon-worlds/reference/2.0.0/unity_asset_bundles_ientitystyle
https://developers.meta.com/horizon-worlds/reference/2.0.0/unity_asset_bundles_setmaterialoptions
https://developers.meta.com/horizon-worlds/reference/2.0.0/unity_asset_bundles_unityanimationevent
https://developers.meta.com/horizon-worlds/reference/2.0.0/world_streaming_sublevelentity
https://developers.meta.com/horizon-worlds/reference/2.0.0/world_streaming_sublevelstates
