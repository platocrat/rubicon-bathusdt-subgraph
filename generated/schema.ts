// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("depositedAmt", Value.fromBigInt(BigInt.zero()));
    this.set("asset", Value.fromBytes(Bytes.empty()));
    this.set("sharesReceived", Value.fromBigInt(BigInt.zero()));
    this.set("depositor", Value.fromBytes(Bytes.empty()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Deposit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Deposit entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Deposit", id.toString(), this);
    }
  }

  static load(id: string): Deposit | null {
    return changetype<Deposit | null>(store.get("Deposit", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get depositedAmt(): BigInt {
    let value = this.get("depositedAmt");
    return value!.toBigInt();
  }

  set depositedAmt(value: BigInt) {
    this.set("depositedAmt", Value.fromBigInt(value));
  }

  get asset(): Bytes {
    let value = this.get("asset");
    return value!.toBytes();
  }

  set asset(value: Bytes) {
    this.set("asset", Value.fromBytes(value));
  }

  get sharesReceived(): BigInt {
    let value = this.get("sharesReceived");
    return value!.toBigInt();
  }

  set sharesReceived(value: BigInt) {
    this.set("sharesReceived", Value.fromBigInt(value));
  }

  get depositor(): Bytes {
    let value = this.get("depositor");
    return value!.toBytes();
  }

  set depositor(value: Bytes) {
    this.set("depositor", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Withdrawal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("amountWithdrawn", Value.fromBigInt(BigInt.zero()));
    this.set("asset", Value.fromBytes(Bytes.empty()));
    this.set("sharesWithdrawn", Value.fromBigInt(BigInt.zero()));
    this.set("withdrawer", Value.fromBytes(Bytes.empty()));
    this.set("fee", Value.fromBigInt(BigInt.zero()));
    this.set("feeTo", Value.fromBytes(Bytes.empty()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Withdrawal entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Withdrawal entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Withdrawal", id.toString(), this);
    }
  }

  static load(id: string): Withdrawal | null {
    return changetype<Withdrawal | null>(store.get("Withdrawal", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amountWithdrawn(): BigInt {
    let value = this.get("amountWithdrawn");
    return value!.toBigInt();
  }

  set amountWithdrawn(value: BigInt) {
    this.set("amountWithdrawn", Value.fromBigInt(value));
  }

  get asset(): Bytes {
    let value = this.get("asset");
    return value!.toBytes();
  }

  set asset(value: Bytes) {
    this.set("asset", Value.fromBytes(value));
  }

  get sharesWithdrawn(): BigInt {
    let value = this.get("sharesWithdrawn");
    return value!.toBigInt();
  }

  set sharesWithdrawn(value: BigInt) {
    this.set("sharesWithdrawn", Value.fromBigInt(value));
  }

  get withdrawer(): Bytes {
    let value = this.get("withdrawer");
    return value!.toBytes();
  }

  set withdrawer(value: Bytes) {
    this.set("withdrawer", Value.fromBytes(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value!.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get feeTo(): Bytes {
    let value = this.get("feeTo");
    return value!.toBytes();
  }

  set feeTo(value: Bytes) {
    this.set("feeTo", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("value", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transfer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Transfer", id.toString(), this);
    }
  }

  static load(id: string): Transfer | null {
    return changetype<Transfer | null>(store.get("Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("spender", Value.fromBytes(Bytes.empty()));
    this.set("value", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Approval entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Approval entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Approval", id.toString(), this);
    }
  }

  static load(id: string): Approval | null {
    return changetype<Approval | null>(store.get("Approval", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get spender(): Bytes {
    let value = this.get("spender");
    return value!.toBytes();
  }

  set spender(value: Bytes) {
    this.set("spender", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class LogInit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timeOfInit", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LogInit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save LogInit entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("LogInit", id.toString(), this);
    }
  }

  static load(id: string): LogInit | null {
    return changetype<LogInit | null>(store.get("LogInit", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timeOfInit(): BigInt {
    let value = this.get("timeOfInit");
    return value!.toBigInt();
  }

  set timeOfInit(value: BigInt) {
    this.set("timeOfInit", Value.fromBigInt(value));
  }
}

export class BathToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timeOfInit", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BathToken entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BathToken entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BathToken", id.toString(), this);
    }
  }

  static load(id: string): BathToken | null {
    return changetype<BathToken | null>(store.get("BathToken", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timeOfInit(): BigInt {
    let value = this.get("timeOfInit");
    return value!.toBigInt();
  }

  set timeOfInit(value: BigInt) {
    this.set("timeOfInit", Value.fromBigInt(value));
  }
}
