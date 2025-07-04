// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 * The `@minecraft/server-net` module contains types for
 * executing HTTP-based requests. This module can only be used
 * on Bedrock Dedicated Server. These APIs do not function
 * within the Minecraft game client or within Minecraft Realms.
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/server-net",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import * as minecraftserver from '@minecraft/server';
import * as minecraftserveradmin from '@minecraft/server-admin';
export enum HttpRequestMethod {
    /**
     * @remarks
     * Represents the method for an HTTP HEAD request. HEAD
     * requests are similar to a GET request, but are commonly used
     * to retrieve just the HTTP response headers from the
     * specified URI, and not the body contents.
     *
     */
    Delete = 'Delete',
    /**
     * @remarks
     * Represents the method for an HTTP PUT request. POST requests
     * are commonly used to create a new resource that is a
     * subordinate of the specified URI.
     *
     */
    Get = 'Get',
    /**
     * @remarks
     * Represents the method for an HTTP PUT request. GET requests
     * are commonly used to retrieve information about a resource
     * at the specified URI.
     *
     */
    Head = 'Head',
    /**
     * @remarks
     * Represents the method for an HTTP PUT request. GET requests
     * are commonly used to retrieve information about a resource
     * at the specified URI.
     *
     */
    Post = 'Post',
    /**
     * @remarks
     * Represents the method for an HTTP PUT request. PUT requests
     * are commonly used to update a single resource that already
     * exists in a resource collection.
     *
     */
    Put = 'Put',
}

/**
 * Represents the unique type of network packet.
 */
export enum PacketId {
    ActorEventPacket = 'ActorEventPacket',
    ActorPickRequestPacket = 'ActorPickRequestPacket',
    AddActorPacket = 'AddActorPacket',
    AddBehaviorTreePacket = 'AddBehaviorTreePacket',
    AddItemActorPacket = 'AddItemActorPacket',
    AddPaintingPacket = 'AddPaintingPacket',
    AddPlayerPacket = 'AddPlayerPacket',
    AddVolumeEntityPacket = 'AddVolumeEntityPacket',
    AgentActionEventPacket = 'AgentActionEventPacket',
    AgentAnimationPacket = 'AgentAnimationPacket',
    AnimateEntityPacket = 'AnimateEntityPacket',
    AnimatePacket = 'AnimatePacket',
    AnvilDamagePacket = 'AnvilDamagePacket',
    AutomationClientConnectPacket = 'AutomationClientConnectPacket',
    AvailableActorIdentifiersPacket = 'AvailableActorIdentifiersPacket',
    AvailableCommandsPacket = 'AvailableCommandsPacket',
    AwardAchievementPacket = 'AwardAchievementPacket',
    BiomeDefinitionListPacket = 'BiomeDefinitionListPacket',
    BlockActorDataPacket = 'BlockActorDataPacket',
    BlockEventPacket = 'BlockEventPacket',
    BlockPickRequestPacket = 'BlockPickRequestPacket',
    BookEditPacket = 'BookEditPacket',
    BossEventPacket = 'BossEventPacket',
    CameraAimAssistPacket = 'CameraAimAssistPacket',
    CameraAimAssistPresetsPacket = 'CameraAimAssistPresetsPacket',
    CameraInstructionPacket = 'CameraInstructionPacket',
    CameraPacket = 'CameraPacket',
    CameraPresetsPacket = 'CameraPresetsPacket',
    CameraShakePacket = 'CameraShakePacket',
    ChangeDimensionPacket = 'ChangeDimensionPacket',
    ChangeMobPropertyPacket = 'ChangeMobPropertyPacket',
    ChunkRadiusUpdatedPacket = 'ChunkRadiusUpdatedPacket',
    ClientboundCloseFormPacket = 'ClientboundCloseFormPacket',
    ClientboundControlSchemeSetPacket = 'ClientboundControlSchemeSetPacket',
    ClientboundDebugRendererPacket = 'ClientboundDebugRendererPacket',
    ClientboundMapItemDataPacket = 'ClientboundMapItemDataPacket',
    ClientCacheBlobStatusPacket = 'ClientCacheBlobStatusPacket',
    ClientCacheMissResponsePacket = 'ClientCacheMissResponsePacket',
    ClientCacheStatusPacket = 'ClientCacheStatusPacket',
    ClientCameraAimAssistPacket = 'ClientCameraAimAssistPacket',
    ClientMovementPredictionSyncPacket = 'ClientMovementPredictionSyncPacket',
    ClientToServerHandshakePacket = 'ClientToServerHandshakePacket',
    CodeBuilderPacket = 'CodeBuilderPacket',
    CodeBuilderSourcePacket = 'CodeBuilderSourcePacket',
    CommandBlockUpdatePacket = 'CommandBlockUpdatePacket',
    CommandOutputPacket = 'CommandOutputPacket',
    CommandRequestPacket = 'CommandRequestPacket',
    CompletedUsingItemPacket = 'CompletedUsingItemPacket',
    ContainerClosePacket = 'ContainerClosePacket',
    ContainerOpenPacket = 'ContainerOpenPacket',
    ContainerRegistryCleanupPacket = 'ContainerRegistryCleanupPacket',
    ContainerSetDataPacket = 'ContainerSetDataPacket',
    CorrectPlayerMovePredictionPacket = 'CorrectPlayerMovePredictionPacket',
    CraftingDataPacket = 'CraftingDataPacket',
    CreatePhotoPacket = 'CreatePhotoPacket',
    CreativeContentPacket = 'CreativeContentPacket',
    CurrentStructureFeaturePacket = 'CurrentStructureFeaturePacket',
    DeathInfoPacket = 'DeathInfoPacket',
    DebugInfoPacket = 'DebugInfoPacket',
    DimensionDataPacket = 'DimensionDataPacket',
    DisconnectPacket = 'DisconnectPacket',
    EditorNetworkPacket = 'EditorNetworkPacket',
    EducationSettingsPacket = 'EducationSettingsPacket',
    EduUriResourcePacket = 'EduUriResourcePacket',
    EmoteListPacket = 'EmoteListPacket',
    EmotePacket = 'EmotePacket',
    FeatureRegistryPacket = 'FeatureRegistryPacket',
    GameRulesChangedPacket = 'GameRulesChangedPacket',
    GameTestRequestPacket = 'GameTestRequestPacket',
    GameTestResultsPacket = 'GameTestResultsPacket',
    GuiDataPickItemPacket = 'GuiDataPickItemPacket',
    HurtArmorPacket = 'HurtArmorPacket',
    InteractPacket = 'InteractPacket',
    InventoryContentPacket = 'InventoryContentPacket',
    InventorySlotPacket = 'InventorySlotPacket',
    InventoryTransactionPacket = 'InventoryTransactionPacket',
    ItemRegistryPacket = 'ItemRegistryPacket',
    ItemStackRequestPacket = 'ItemStackRequestPacket',
    ItemStackResponsePacket = 'ItemStackResponsePacket',
    JigsawStructureDataPacket = 'JigsawStructureDataPacket',
    LabTablePacket = 'LabTablePacket',
    LecternUpdatePacket = 'LecternUpdatePacket',
    LegacyTelemetryEventPacket = 'LegacyTelemetryEventPacket',
    LessonProgressPacket = 'LessonProgressPacket',
    LevelChunkPacket = 'LevelChunkPacket',
    LevelEventGenericPacket = 'LevelEventGenericPacket',
    LevelEventPacket = 'LevelEventPacket',
    LevelSoundEventPacket = 'LevelSoundEventPacket',
    LoginPacket = 'LoginPacket',
    MapCreateLockedCopyPacket = 'MapCreateLockedCopyPacket',
    MapInfoRequestPacket = 'MapInfoRequestPacket',
    MobArmorEquipmentPacket = 'MobArmorEquipmentPacket',
    MobEffectPacket = 'MobEffectPacket',
    MobEquipmentPacket = 'MobEquipmentPacket',
    ModalFormRequestPacket = 'ModalFormRequestPacket',
    ModalFormResponsePacket = 'ModalFormResponsePacket',
    MotionPredictionHintsPacket = 'MotionPredictionHintsPacket',
    MoveActorAbsolutePacket = 'MoveActorAbsolutePacket',
    MoveActorDeltaPacket = 'MoveActorDeltaPacket',
    MovementEffectPacket = 'MovementEffectPacket',
    MovePlayerPacket = 'MovePlayerPacket',
    MultiplayerSettingsPacket = 'MultiplayerSettingsPacket',
    NetworkChunkPublisherUpdatePacket = 'NetworkChunkPublisherUpdatePacket',
    NetworkSettingsPacket = 'NetworkSettingsPacket',
    NetworkStackLatencyPacket = 'NetworkStackLatencyPacket',
    NpcDialoguePacket = 'NpcDialoguePacket',
    NpcRequestPacket = 'NpcRequestPacket',
    OnScreenTextureAnimationPacket = 'OnScreenTextureAnimationPacket',
    OpenSignPacket = 'OpenSignPacket',
    PacketViolationWarningPacket = 'PacketViolationWarningPacket',
    PhotoTransferPacket = 'PhotoTransferPacket',
    PlayerActionPacket = 'PlayerActionPacket',
    PlayerArmorDamagePacket = 'PlayerArmorDamagePacket',
    PlayerAuthInputPacket = 'PlayerAuthInputPacket',
    PlayerEnchantOptionsPacket = 'PlayerEnchantOptionsPacket',
    PlayerFogPacket = 'PlayerFogPacket',
    PlayerHotbarPacket = 'PlayerHotbarPacket',
    PlayerListPacket = 'PlayerListPacket',
    PlayerLocationPacket = 'PlayerLocationPacket',
    PlayerSkinPacket = 'PlayerSkinPacket',
    PlayerStartItemCooldownPacket = 'PlayerStartItemCooldownPacket',
    PlayerToggleCrafterSlotRequestPacket = 'PlayerToggleCrafterSlotRequestPacket',
    PlayerUpdateEntityOverridesPacket = 'PlayerUpdateEntityOverridesPacket',
    PlaySoundPacket = 'PlaySoundPacket',
    PlayStatusPacket = 'PlayStatusPacket',
    PositionTrackingDBClientRequestPacket = 'PositionTrackingDBClientRequestPacket',
    PositionTrackingDBServerBroadcastPacket = 'PositionTrackingDBServerBroadcastPacket',
    PurchaseReceiptPacket = 'PurchaseReceiptPacket',
    RefreshEntitlementsPacket = 'RefreshEntitlementsPacket',
    RemoveActorPacket = 'RemoveActorPacket',
    RemoveObjectivePacket = 'RemoveObjectivePacket',
    RemoveVolumeEntityPacket = 'RemoveVolumeEntityPacket',
    RequestAbilityPacket = 'RequestAbilityPacket',
    RequestChunkRadiusPacket = 'RequestChunkRadiusPacket',
    RequestNetworkSettingsPacket = 'RequestNetworkSettingsPacket',
    RequestPermissionsPacket = 'RequestPermissionsPacket',
    ResourcePackChunkDataPacket = 'ResourcePackChunkDataPacket',
    ResourcePackChunkRequestPacket = 'ResourcePackChunkRequestPacket',
    ResourcePackClientResponsePacket = 'ResourcePackClientResponsePacket',
    ResourcePackDataInfoPacket = 'ResourcePackDataInfoPacket',
    ResourcePacksInfoPacket = 'ResourcePacksInfoPacket',
    ResourcePackStackPacket = 'ResourcePackStackPacket',
    RespawnPacket = 'RespawnPacket',
    ScriptMessagePacket = 'ScriptMessagePacket',
    ServerboundDiagnosticsPacket = 'ServerboundDiagnosticsPacket',
    ServerboundLoadingScreenPacket = 'ServerboundLoadingScreenPacket',
    ServerPlayerPostMovePositionPacket = 'ServerPlayerPostMovePositionPacket',
    ServerScriptDebugDrawerPacket = 'ServerScriptDebugDrawerPacket',
    ServerSettingsRequestPacket = 'ServerSettingsRequestPacket',
    ServerSettingsResponsePacket = 'ServerSettingsResponsePacket',
    ServerStatsPacket = 'ServerStatsPacket',
    ServerToClientHandshakePacket = 'ServerToClientHandshakePacket',
    SetActorDataPacket = 'SetActorDataPacket',
    SetActorLinkPacket = 'SetActorLinkPacket',
    SetActorMotionPacket = 'SetActorMotionPacket',
    SetCommandsEnabledPacket = 'SetCommandsEnabledPacket',
    SetDefaultGameTypePacket = 'SetDefaultGameTypePacket',
    SetDifficultyPacket = 'SetDifficultyPacket',
    SetDisplayObjectivePacket = 'SetDisplayObjectivePacket',
    SetHealthPacket = 'SetHealthPacket',
    SetHudPacket = 'SetHudPacket',
    SetLastHurtByPacket = 'SetLastHurtByPacket',
    SetLocalPlayerAsInitializedPacket = 'SetLocalPlayerAsInitializedPacket',
    SetPlayerGameTypePacket = 'SetPlayerGameTypePacket',
    SetPlayerInventoryOptionsPacket = 'SetPlayerInventoryOptionsPacket',
    SetScoreboardIdentityPacket = 'SetScoreboardIdentityPacket',
    SetScorePacket = 'SetScorePacket',
    SetSpawnPositionPacket = 'SetSpawnPositionPacket',
    SetTimePacket = 'SetTimePacket',
    SettingsCommandPacket = 'SettingsCommandPacket',
    SetTitlePacket = 'SetTitlePacket',
    ShowCreditsPacket = 'ShowCreditsPacket',
    ShowProfilePacket = 'ShowProfilePacket',
    ShowStoreOfferPacket = 'ShowStoreOfferPacket',
    SimpleEventPacket = 'SimpleEventPacket',
    SimulationTypePacket = 'SimulationTypePacket',
    SpawnExperienceOrbPacket = 'SpawnExperienceOrbPacket',
    SpawnParticleEffectPacket = 'SpawnParticleEffectPacket',
    StartGamePacket = 'StartGamePacket',
    StopSoundPacket = 'StopSoundPacket',
    StructureBlockUpdatePacket = 'StructureBlockUpdatePacket',
    StructureTemplateDataRequestPacket = 'StructureTemplateDataRequestPacket',
    StructureTemplateDataResponsePacket = 'StructureTemplateDataResponsePacket',
    SubChunkPacket = 'SubChunkPacket',
    SubChunkRequestPacket = 'SubChunkRequestPacket',
    SubClientLoginPacket = 'SubClientLoginPacket',
    SyncActorPropertyPacket = 'SyncActorPropertyPacket',
    TakeItemActorPacket = 'TakeItemActorPacket',
    TextPacket = 'TextPacket',
    TickingAreasLoadStatusPacket = 'TickingAreasLoadStatusPacket',
    ToastRequestPacket = 'ToastRequestPacket',
    TransferPacket = 'TransferPacket',
    TrimDataPacket = 'TrimDataPacket',
    UnlockedRecipesPacket = 'UnlockedRecipesPacket',
    UpdateAbilitiesPacket = 'UpdateAbilitiesPacket',
    UpdateAdventureSettingsPacket = 'UpdateAdventureSettingsPacket',
    UpdateAttributesPacket = 'UpdateAttributesPacket',
    UpdateBlockPacket = 'UpdateBlockPacket',
    UpdateBlockSyncedPacket = 'UpdateBlockSyncedPacket',
    UpdateClientInputLocksPacket = 'UpdateClientInputLocksPacket',
    UpdateClientOptions = 'UpdateClientOptions',
    UpdateEquipPacket = 'UpdateEquipPacket',
    UpdatePlayerGameTypePacket = 'UpdatePlayerGameTypePacket',
    UpdateSoftEnumPacket = 'UpdateSoftEnumPacket',
    UpdateSubChunkBlocksPacket = 'UpdateSubChunkBlocksPacket',
    UpdateTradePacket = 'UpdateTradePacket',
}

/**
 * @example simpleHttpRequest.ts
 * ```typescript
 * import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';
 *
 * async function updateScore() {
 *     const req = new HttpRequest('http://localhost:3000/updateScore');
 *
 *     req.body = JSON.stringify({
 *         score: 22,
 *     });
 *
 *     req.method = HttpRequestMethod.Post;
 *     req.headers = [
 *         new HttpHeader('Content-Type', 'application/json'),
 *         new HttpHeader('auth', 'my-auth-token'),
 *     ];
 *
 *     await http.request(req);
 * }
 * ```
 */
export class HttpClient {
    private constructor();
    /**
     * @remarks
     * Cancels all pending requests.
     *
     * This function can be called in early-execution mode.
     *
     */
    cancelAll(reason: string): void;
    /**
     * @remarks
     * Performs a simple HTTP get request.
     *
     * This function can be called in early-execution mode.
     *
     * @param uri
     * URL to make an HTTP Request to.
     * @returns
     * An awaitable promise that contains the HTTP response.
     */
    get(uri: string): Promise<HttpResponse>;
    /**
     * @remarks
     * Performs an HTTP request.
     *
     * This function can be called in early-execution mode.
     *
     * @param config
     * Contains an HTTP Request object with configuration data on
     * the HTTP request.
     * @returns
     * An awaitable promise that contains the HTTP response.
     * @example simpleHttpRequest.ts
     * ```typescript
     * import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';
     *
     * async function updateScore() {
     *     const req = new HttpRequest('http://localhost:3000/updateScore');
     *
     *     req.body = JSON.stringify({
     *         score: 22,
     *     });
     *
     *     req.method = HttpRequestMethod.Post;
     *     req.headers = [
     *         new HttpHeader('Content-Type', 'application/json'),
     *         new HttpHeader('auth', 'my-auth-token'),
     *     ];
     *
     *     await http.request(req);
     * }
     * ```
     */
    request(config: HttpRequest): Promise<HttpResponse>;
}

/**
 * Represents an HTTP header - a key/value pair of
 * meta-information about a request.
 * @example simpleHttpRequest.ts
 * ```typescript
 * import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';
 *
 * async function updateScore() {
 *     const req = new HttpRequest('http://localhost:3000/updateScore');
 *
 *     req.body = JSON.stringify({
 *         score: 22,
 *     });
 *
 *     req.method = HttpRequestMethod.Post;
 *     req.headers = [
 *         new HttpHeader('Content-Type', 'application/json'),
 *         new HttpHeader('auth', 'my-auth-token'),
 *     ];
 *
 *     await http.request(req);
 * }
 * ```
 */
export class HttpHeader {
    /**
     * @remarks
     * Key of the HTTP header.
     *
     * This property can be edited in early-execution mode.
     *
     */
    key: string;
    /**
     * @remarks
     * Value of the HTTP header.
     *
     * This property can be edited in early-execution mode.
     *
     */
    value: minecraftserveradmin.SecretString | string;
    constructor(key: string, value: minecraftserveradmin.SecretString | string);
}

/**
 * Main object for structuring a request.
 * @example simpleHttpRequest.ts
 * ```typescript
 * import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';
 *
 * async function updateScore() {
 *     const req = new HttpRequest('http://localhost:3000/updateScore');
 *
 *     req.body = JSON.stringify({
 *         score: 22,
 *     });
 *
 *     req.method = HttpRequestMethod.Post;
 *     req.headers = [
 *         new HttpHeader('Content-Type', 'application/json'),
 *         new HttpHeader('auth', 'my-auth-token'),
 *     ];
 *
 *     await http.request(req);
 * }
 * ```
 */
export class HttpRequest {
    /**
     * @remarks
     * Content of the body of the HTTP request.
     *
     * This property can be edited in early-execution mode.
     *
     */
    body: string;
    /**
     * @remarks
     * A collection of HTTP headers to add to the outbound request.
     *
     * This property can be edited in early-execution mode.
     *
     */
    headers: HttpHeader[];
    /**
     * @remarks
     * HTTP method (e.g., GET or PUT or PATCH) to use for making
     * the request.
     *
     * This property can be edited in early-execution mode.
     *
     */
    method: HttpRequestMethod;
    /**
     * @remarks
     * Amount of time, in seconds, before the request times out and
     * is abandoned.
     *
     * This property can be edited in early-execution mode.
     *
     */
    timeout: number;
    /**
     * @remarks
     * The HTTP resource to access.
     *
     * This property can be edited in early-execution mode.
     *
     */
    uri: string;
    constructor(uri: string);
    /**
     * @remarks
     * Adds an additional header to the overall list of headers
     * used in the corresponding HTTP request.
     *
     * This function can be called in early-execution mode.
     *
     */
    addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest;
    /**
     * @remarks
     * Updates the content of the body of the HTTP request.
     *
     * This function can be called in early-execution mode.
     *
     */
    setBody(body: string): HttpRequest;
    /**
     * @remarks
     * Replaces and applies a set of HTTP Headers for the request.
     *
     * This function can be called in early-execution mode.
     *
     */
    setHeaders(headers: HttpHeader[]): HttpRequest;
    /**
     * @remarks
     * Sets the desired HTTP method (e.g., GET or PUT or PATCH) to
     * use for making the request.
     *
     * This function can be called in early-execution mode.
     *
     */
    setMethod(method: HttpRequestMethod): HttpRequest;
    /**
     * @remarks
     * This function can be called in early-execution mode.
     *
     */
    setTimeout(timeout: number): HttpRequest;
}

/**
 * Main object that contains result information from a request.
 */
export class HttpResponse {
    private constructor();
    /**
     * @remarks
     * Body content of the HTTP response.
     *
     */
    readonly body: string;
    /**
     * @remarks
     * A collection of HTTP response headers returned from the
     * request.
     *
     */
    readonly headers: HttpHeader[];
    /**
     * @remarks
     * Information that was used to formulate the HTTP response
     * that this object represents.
     *
     */
    readonly request: HttpRequest;
    /**
     * @remarks
     * HTTP response code for the request. For example, 404
     * represents resource not found, and 500 represents an
     * internal server error.
     *
     */
    readonly status: number;
}

export class NetworkBeforeEvents {
    private constructor();
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly packetReceive: PacketReceiveBeforeEventSignal;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly packetSend: PacketSendBeforeEventSignal;
}

export class PacketReceiveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PacketReceivedBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg0: PacketReceivedBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PacketReceivedBeforeEvent) => void): void;
}

/**
 * Sent as the server receives a network packet from a client.
 * If cancelled, the server will not parse the network packet
 * and will silently ignore it.
 */
export class PacketReceivedBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * The type of network packet.
     *
     */
    readonly packetId: PacketId;
    /**
     * @remarks
     * The size of the network packet in bytes.
     *
     */
    readonly packetSize: number;
    /**
     * @remarks
     * Which client sent the network packet to the game server.
     *
     */
    readonly sender?: minecraftserver.Player;
}

/**
 * Sent as the server sends a network packet to clients.  If
 * cancelled, the server will not send the network packet to
 * the receiving clients.
 */
export class PacketSendBeforeEvent {
    private constructor();
    cancel: boolean;
    /**
     * @remarks
     * The type of network packet.
     *
     */
    readonly packetId: PacketId;
    /**
     * @remarks
     * Which clients the network packet is being sent to.
     *
     */
    readonly recipients: (minecraftserver.Player | undefined)[];
}

export class PacketSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    subscribe(
        callback: (arg0: PacketSendBeforeEvent) => void,
        options?: PacketEventOptions,
    ): (arg0: PacketSendBeforeEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    unsubscribe(callback: (arg0: PacketSendBeforeEvent) => void): void;
}

/**
 * Options for events triggered by network packets.
 */
export interface PacketEventOptions {
    /**
     * @remarks
     * If provided, packet IDs in this list will not trigger the
     * event subscriptions.
     *
     */
    ignoredPacketIds?: PacketId[];
    /**
     * @remarks
     * If provided only packet IDs in this list will trigger the
     * event subscriptions.
     *
     */
    monitoredPacketIds?: PacketId[];
}

/**
 * An error thrown when a platform-level HTTP error occurs.
 * Information provided in this class may be useful for
 * diagnostics purposes but will differ from platform to
 * platform.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InternalHttpRequestError extends Error {
    private constructor();
    /**
     * @remarks
     * The platform-provided numeric error code for the error.
     *
     * This property can be read in early-execution mode.
     *
     */
    code: number;
    /**
     * @remarks
     * The platform-provided message for the error.
     *
     * This property can be read in early-execution mode.
     *
     */
    message: string;
}

/**
 * An error thrown when a malformed HTTP request is attempted
 * to be sent.
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class MalformedHttpRequestError extends Error {
    private constructor();
}

export const beforeEvents: NetworkBeforeEvents;
export const http: HttpClient;
