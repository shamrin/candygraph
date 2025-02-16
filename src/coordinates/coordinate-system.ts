import { DrawCommand } from "regl";
import { Vector2 } from "../common";

export enum Kind {
  Cartesian,
  Polar,
}

export abstract class CoordinateSystem {
  public abstract readonly kind: Kind;
  public abstract readonly glsl: string;
  public abstract readonly scope: DrawCommand;
  public abstract props(): Record<string, unknown>;
  public abstract toDomain(rangeVector: Vector2): Vector2;
  public abstract toRange(domainVector: Vector2): Vector2;
}
