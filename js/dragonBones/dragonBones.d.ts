/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * @private
     */
    const enum BinaryOffset {
        WeigthBoneCount = 0,
        WeigthFloatOffset = 1,
        WeigthBoneIndices = 2,
        GeometryVertexCount = 0,
        GeometryTriangleCount = 1,
        GeometryFloatOffset = 2,
        GeometryWeightOffset = 3,
        GeometryVertexIndices = 4,
        TimelineScale = 0,
        TimelineOffset = 1,
        TimelineKeyFrameCount = 2,
        TimelineFrameValueCount = 3,
        TimelineFrameValueOffset = 4,
        TimelineFrameOffset = 5,
        FramePosition = 0,
        FrameTweenType = 1,
        FrameTweenEasingOrCurveSampleCount = 2,
        FrameCurveSamples = 3,
        DeformVertexOffset = 0,
        DeformCount = 1,
        DeformValueCount = 2,
        DeformValueOffset = 3,
        DeformFloatOffset = 4
    }
    /**
     * @private
     */
    const enum ArmatureType {
        Armature = 0,
        MovieClip = 1,
        Stage = 2
    }
    /**
     * @private
     */
    const enum BoneType {
        Bone = 0,
        Surface = 1
    }
    /**
     * @private
     */
    const enum DisplayType {
        Image = 0,
        Armature = 1,
        Mesh = 2,
        BoundingBox = 3,
        Path = 4
    }
    /**
     * - Bounding box type.
     * @version DragonBones 5.0
     * @language en_US
     */
    /**
     * - ??????????????????
     * @version DragonBones 5.0
     * @language zh_CN
     */
    const enum BoundingBoxType {
        Rectangle = 0,
        Ellipse = 1,
        Polygon = 2
    }
    /**
     * @private
     */
    const enum ActionType {
        Play = 0,
        Frame = 10,
        Sound = 11
    }
    /**
     * @private
     */
    const enum BlendMode {
        Normal = 0,
        Add = 1,
        Alpha = 2,
        Darken = 3,
        Difference = 4,
        Erase = 5,
        HardLight = 6,
        Invert = 7,
        Layer = 8,
        Lighten = 9,
        Multiply = 10,
        Overlay = 11,
        Screen = 12,
        Subtract = 13
    }
    /**
     * @private
     */
    const enum TweenType {
        None = 0,
        Line = 1,
        Curve = 2,
        QuadIn = 3,
        QuadOut = 4,
        QuadInOut = 5
    }
    /**
     * @private
     */
    const enum TimelineType {
        Action = 0,
        ZOrder = 1,
        BoneAll = 10,
        BoneTranslate = 11,
        BoneRotate = 12,
        BoneScale = 13,
        Surface = 50,
        BoneAlpha = 60,
        SlotDisplay = 20,
        SlotColor = 21,
        SlotDeform = 22,
        SlotZIndex = 23,
        SlotAlpha = 24,
        IKConstraint = 30,
        AnimationProgress = 40,
        AnimationWeight = 41,
        AnimationParameter = 42
    }
    /**
     * - Offset mode.
     * @version DragonBones 5.5
     * @language en_US
     */
    /**
     * - ???????????????
     * @version DragonBones 5.5
     * @language zh_CN
     */
    const enum OffsetMode {
        None = 0,
        Additive = 1,
        Override = 2
    }
    /**
     * - Animation fade out mode.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - ?????????????????????
     * @version DragonBones 4.5
     * @language zh_CN
     */
    const enum AnimationFadeOutMode {
        /**
         * - Fade out the animation states of the same layer.
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @language zh_CN
         */
        SameLayer = 1,
        /**
         * - Fade out the animation states of the same group.
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @language zh_CN
         */
        SameGroup = 2,
        /**
         * - Fade out the animation states of the same layer and group.
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????
         * @language zh_CN
         */
        SameLayerAndGroup = 3,
        /**
         * - Fade out of all animation states.
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @language zh_CN
         */
        All = 4,
        /**
         * - Does not replace the animation state with the same name.
         * @language en_US
         */
        /**
         * - ?????????????????????????????????
         * @language zh_CN
         */
        Single = 5
    }
    /**
     * @private
     */
    const enum AnimationBlendType {
        None = 0,
        E1D = 1
    }
    /**
     * @private
     */
    const enum AnimationBlendMode {
        Additive = 0,
        Override = 1
    }
    /**
     * @private
     */
    const enum ConstraintType {
        IK = 0,
        Path = 1
    }
    /**
     * @private
     */
    const enum PositionMode {
        Fixed = 0,
        Percent = 1
    }
    /**
     * @private
     */
    const enum SpacingMode {
        Length = 0,
        Fixed = 1,
        Percent = 2
    }
    /**
     * @private
     */
    const enum RotateMode {
        Tangent = 0,
        Chain = 1,
        ChainScale = 2
    }
    /**
     * @private
     */
    interface Map<T> {
        [key: string]: T;
    }
    /**
     * @private
     */
    class DragonBones {
        static readonly VERSION: string;
        static yDown: boolean;
        static debug: boolean;
        static debugDraw: boolean;
        private readonly _clock;
        private readonly _events;
        private readonly _objects;
        private _eventManager;
        constructor(eventManager: IEventDispatcher);
        advanceTime(passedTime: number): void;
        bufferEvent(value: EventObject): void;
        bufferObject(object: BaseObject): void;
        readonly clock: WorldClock;
        readonly eventManager: IEventDispatcher;
    }
}
declare let __extends: any;
declare let exports: any;
declare let module: any;
declare let define: any;
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The BaseObject is the core class for all objects in the DragonBones framework.
     * All BaseObject instances are cached to the object pool to reduce the performance consumption of frequent requests for memory or memory recovery.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - ????????????????????? DragonBones ??????????????????????????????
     * ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
     * @version DragonBones 4.5
     * @language zh_CN
     */
    abstract class BaseObject {
        private static _hashCode;
        private static _defaultMaxCount;
        private static readonly _maxCountMap;
        private static readonly _poolsMap;
        private static _returnObject;
        static toString(): string;
        /**
         * - Set the maximum cache count of the specify object pool.
         * @param objectConstructor - The specify class. (Set all object pools max cache count if not set)
         * @param maxCount - Max count.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????????
         * @param objectConstructor - ??????????????? (??????????????????????????????????????????????????????)
         * @param maxCount - ?????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        static setMaxCount(objectConstructor: (typeof BaseObject) | null, maxCount: number): void;
        /**
         * - Clear the cached instances of a specify object pool.
         * @param objectConstructor - Specify class. (Clear all cached instances if not set)
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????
         * @param objectConstructor - ??????????????? (???????????????????????????????????????)
         * @version DragonBones 4.5
         * @language zh_CN
         */
        static clearPool(objectConstructor?: (typeof BaseObject) | null): void;
        /**
         * - Get an instance of the specify class from object pool.
         * @param objectConstructor - The specify class.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????
         * @param objectConstructor - ???????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        static borrowObject<T extends BaseObject>(objectConstructor: {
            new (): T;
        }): T;
        /**
         * - A unique identification number assigned to the object.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        readonly hashCode: number;
        private _isInPool;
        protected abstract _onClear(): void;
        /**
         * - Clear the object and return it back to object pool???
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        returnToPool(): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - 2D Transform matrix.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 2D ???????????????
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class Matrix {
        /**
         * - The value that affects the positioning of pixels along the x axis when scaling or rotating an image.
         * @default 1.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????? x ??????????????????
         * @default 1.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        a: number;
        /**
         * - The value that affects the positioning of pixels along the y axis when rotating or skewing an image.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????? y ??????????????????
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        b: number;
        /**
         * - The value that affects the positioning of pixels along the x axis when rotating or skewing an image.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????? x ??????????????????
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        c: number;
        /**
         * - The value that affects the positioning of pixels along the y axis when scaling or rotating an image.
         * @default 1.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????? y ??????????????????
         * @default 1.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        d: number;
        /**
         * - The distance by which to translate each point along the x axis.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??? x ??????????????????????????????
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        tx: number;
        /**
         * - The distance by which to translate each point along the y axis.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??? y ??????????????????????????????
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        ty: number;
        /**
         * @private
         */
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
        toString(): string;
        /**
         * @private
         */
        copyFrom(value: Matrix): Matrix;
        /**
         * @private
         */
        copyFromArray(value: number[], offset?: number): Matrix;
        /**
         * - Convert to unit matrix.
         * The resulting matrix has the following properties: a=1, b=0, c=0, d=1, tx=0, ty=0.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????
         * ??????????????????????????????a=1???b=0???c=0???d=1???tx=0???ty=0???
         * @version DragonBones 3.0
         * @language zh_CN
         */
        identity(): Matrix;
        /**
         * - Multiplies the current matrix with another matrix.
         * @param value - The matrix that needs to be multiplied.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????
         * @param value - ????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        concat(value: Matrix): Matrix;
        /**
         * - Convert to inverse matrix.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        invert(): Matrix;
        /**
         * - Apply a matrix transformation to a specific point.
         * @param x - X coordinate.
         * @param y - Y coordinate.
         * @param result - The point after the transformation is applied.
         * @param delta - Whether to ignore tx, ty's conversion to point.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????????????????
         * @param x - ????????????
         * @param y - ????????????
         * @param result - ???????????????????????????
         * @param delta - ???????????? tx???ty ??????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        transformPoint(x: number, y: number, result: {
            x: number;
            y: number;
        }, delta?: boolean): void;
        /**
         * @private
         */
        transformRectangle(rectangle: {
            x: number;
            y: number;
            width: number;
            height: number;
        }, delta?: boolean): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - 2D Transform.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - 2D ?????????
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class Transform {
        /**
         * @private
         */
        static readonly PI: number;
        /**
         * @private
         */
        static readonly PI_D: number;
        /**
         * @private
         */
        static readonly PI_H: number;
        /**
         * @private
         */
        static readonly PI_Q: number;
        /**
         * @private
         */
        static readonly RAD_DEG: number;
        /**
         * @private
         */
        static readonly DEG_RAD: number;
        /**
         * @private
         */
        static normalizeRadian(value: number): number;
        /**
         * - Horizontal translate.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        x: number;
        /**
         * - Vertical translate.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        y: number;
        /**
         * - Skew. (In radians)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????? ????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        skew: number;
        /**
         * - rotation. (In radians)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????? ????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        rotation: number;
        /**
         * - Horizontal Scaling.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        scaleX: number;
        /**
         * - Vertical scaling.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        scaleY: number;
        /**
         * @private
         */
        constructor(x?: number, y?: number, skew?: number, rotation?: number, scaleX?: number, scaleY?: number);
        toString(): string;
        /**
         * @private
         */
        copyFrom(value: Transform): Transform;
        /**
         * @private
         */
        identity(): Transform;
        /**
         * @private
         */
        add(value: Transform): Transform;
        /**
         * @private
         */
        minus(value: Transform): Transform;
        /**
         * @private
         */
        fromMatrix(matrix: Matrix): Transform;
        /**
         * @private
         */
        toMatrix(matrix: Matrix): Transform;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * @private
     */
    class ColorTransform {
        alphaMultiplier: number;
        redMultiplier: number;
        greenMultiplier: number;
        blueMultiplier: number;
        alphaOffset: number;
        redOffset: number;
        greenOffset: number;
        blueOffset: number;
        constructor(alphaMultiplier?: number, redMultiplier?: number, greenMultiplier?: number, blueMultiplier?: number, alphaOffset?: number, redOffset?: number, greenOffset?: number, blueOffset?: number);
        copyFrom(value: ColorTransform): void;
        identity(): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The Point object represents a location in a two-dimensional coordinate system.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - Point ???????????????????????????????????????????????????
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class Point {
        /**
         * - The horizontal coordinate.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        x: number;
        /**
         * - The vertical coordinate.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        y: number;
        /**
         * - Creates a new point. If you pass no parameters to this method, a point is created at (0,0).
         * @param x - The horizontal coordinate.
         * @param y - The vertical coordinate.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????? egret.Point ??????.??????????????????????????????????????????????????????0???0??????????????????
         * @param x - ????????????x????????????????????? 0.0???
         * @param y - ????????????y????????????????????? 0.0???
         * @version DragonBones 3.0
         * @language zh_CN
         */
        constructor(x?: number, y?: number);
        /**
         * @private
         */
        copyFrom(value: Point): void;
        /**
         * @private
         */
        clear(): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - A Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its
     * width and its height.<br/>
     * The x, y, width, and height properties of the Rectangle class are independent of each other; changing the value of
     * one property has no effect on the others. However, the right and bottom properties are integrally related to those
     * four properties. For example, if you change the value of the right property, the value of the width property changes;
     * if you change the bottom property, the value of the height property changes.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - Rectangle ????????????????????????????????????????????? (x, y) ????????????????????????????????????????????????<br/>
     * Rectangle ?????? x???y???width ??? height ????????????????????????????????????????????????????????????????????????
     * ?????????right ??? bottom ?????????????????????????????????????????????????????????????????? right ?????????????????? width
     * ?????????????????????????????????????????? bottom ???????????? height ??????????????????????????????
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class Rectangle {
        /**
         * - The x coordinate of the top-left corner of the rectangle.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????? x ?????????
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        x: number;
        /**
         * - The y coordinate of the top-left corner of the rectangle.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????? y ?????????
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        y: number;
        /**
         * - The width of the rectangle, in pixels.
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        width: number;
        /**
         * - ??????????????????????????????????????????
         * @default 0.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - The height of the rectangle, in pixels.
         * @default 0.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        height: number;
        /**
         * @private
         */
        constructor(x?: number, y?: number, width?: number, height?: number);
        /**
         * @private
         */
        copyFrom(value: Rectangle): void;
        /**
         * @private
         */
        clear(): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The user custom data.
     * @version DragonBones 5.0
     * @language en_US
     */
    /**
     * - ????????????????????????
     * @version DragonBones 5.0
     * @language zh_CN
     */
    class UserData extends BaseObject {
        static toString(): string;
        /**
         * - The custom int numbers.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ??????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        readonly ints: number[];
        /**
         * - The custom float numbers.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        readonly floats: number[];
        /**
         * - The custom strings.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        readonly strings: string[];
        protected _onClear(): void;
        /**
         * - Get the custom int number.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ????????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        getInt(index?: number): number;
        /**
         * - Get the custom float number.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        getFloat(index?: number): number;
        /**
         * - Get the custom string.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        getString(index?: number): string;
    }
    /**
     * @private
     */
    class ActionData extends BaseObject {
        static toString(): string;
        type: ActionType;
        name: string;
        bone: BoneData | null;
        slot: SlotData | null;
        data: UserData | null;
        protected _onClear(): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The DragonBones data.
     * A DragonBones data contains multiple armature data.
     * @see dragonBones.ArmatureData
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ???????????????
     * ?????????????????????????????????????????????
     * @see dragonBones.ArmatureData
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class DragonBonesData extends BaseObject {
        static toString(): string;
        /**
         * @private
         */
        autoSearch: boolean;
        /**
         * - The animation frame rate.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        frameRate: number;
        /**
         * - The data version.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        version: string;
        /**
         * - The DragonBones data name.
         * The name is consistent with the DragonBones project name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????
         * ??????????????????????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        name: string;
        /**
         * @private
         */
        stage: ArmatureData | null;
        /**
         * - All armature data names.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly armatureNames: string[];
        /**
         * @private
         */
        readonly armatures: Map<ArmatureData>;
        /**
         * @private
         */
        userData: UserData | null;
        protected _onClear(): void;
        /**
         * - Get a specific armature data.
         * @param armatureName - The armature data name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @param armatureName - ?????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getArmature(armatureName: string): ArmatureData | null;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The armature data.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ???????????????
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class ArmatureData extends BaseObject {
        static toString(): string;
        /**
         * @private
         */
        type: ArmatureType;
        /**
         * - The animation frame rate.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        frameRate: number;
        /**
         * @private
         */
        cacheFrameRate: number;
        /**
         * @private
         */
        scale: number;
        /**
         * - The armature name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        name: string;
        /**
         * @private
         */
        readonly aabb: Rectangle;
        /**
         * - The names of all the animation data.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly animationNames: string[];
        /**
         * @private
         */
        readonly sortedBones: BoneData[];
        /**
         * @private
         */
        readonly sortedSlots: SlotData[];
        /**
         * @private
         */
        readonly defaultActions: ActionData[];
        /**
         * @private
         */
        readonly actions: ActionData[];
        /**
         * @private
         */
        readonly bones: Map<BoneData>;
        /**
         * @private
         */
        readonly slots: Map<SlotData>;
        /**
         * @private
         */
        readonly constraints: Map<ConstraintData>;
        /**
         * @private
         */
        readonly skins: Map<SkinData>;
        /**
         * @private
         */
        readonly animations: Map<AnimationData>;
        /**
         * - The default skin data.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        defaultSkin: SkinData | null;
        /**
         * - The default animation data.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        defaultAnimation: AnimationData | null;
        /**
         * @private
         */
        canvas: CanvasData | null;
        /**
         * @private
         */
        userData: UserData | null;
        /**
         * @private
         */
        parent: DragonBonesData;
        protected _onClear(): void;
        /**
         * - Get a specific done data.
         * @param boneName - The bone name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @param boneName - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getBone(boneName: string): BoneData | null;
        /**
         * - Get a specific slot data.
         * @param slotName - The slot name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @param slotName - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getSlot(slotName: string): SlotData | null;
        /**
         * @private
         */
        getConstraint(constraintName: string): ConstraintData | null;
        /**
         * - Get a specific skin data.
         * @param skinName - The skin name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????????????????
         * @param skinName - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getSkin(skinName: string): SkinData | null;
        /**
         * @private
         */
        getMesh(skinName: string, slotName: string, meshName: string): MeshDisplayData | null;
        /**
         * - Get a specific animation data.
         * @param animationName - The animation animationName.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @param animationName - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getAnimation(animationName: string): AnimationData | null;
    }
    /**
     * - The bone data.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ???????????????
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class BoneData extends BaseObject {
        static toString(): string;
        /**
         * @private
         */
        inheritTranslation: boolean;
        /**
         * @private
         */
        inheritRotation: boolean;
        /**
         * @private
         */
        inheritScale: boolean;
        /**
         * @private
         */
        inheritReflection: boolean;
        /**
         * @private
         */
        type: BoneType;
        /**
         * - The bone length.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        length: number;
        /**
         * @private
         */
        alpha: number;
        /**
         * - The bone name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        name: string;
        /**
         * @private
         */
        readonly transform: Transform;
        /**
         * @private
         */
        userData: UserData | null;
        /**
         * - The parent bone data.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        parent: BoneData | null;
        protected _onClear(): void;
    }
    /**
     * - The slot data.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ???????????????
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class SlotData extends BaseObject {
        static toString(): string;
        /**
         * @private
         */
        blendMode: BlendMode;
        /**
         * @private
         */
        displayIndex: number;
        /**
         * @private
         */
        zOrder: number;
        /**
         * @private
         */
        zIndex: number;
        /**
         * @private
         */
        alpha: number;
        /**
         * - The slot name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        name: string;
        /**
         * @private
         */
        color: ColorTransform;
        /**
         * @private
         */
        userData: UserData | null;
        /**
         * - The parent bone data.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        parent: BoneData;
        protected _onClear(): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * @private
     */
    abstract class ConstraintData extends BaseObject {
        order: number;
        name: string;
        type: ConstraintType;
        target: BoneData;
        root: BoneData;
        bone: BoneData | null;
        protected _onClear(): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * @private
     */
    class CanvasData extends BaseObject {
        static toString(): string;
        hasBackground: boolean;
        color: number;
        x: number;
        y: number;
        width: number;
        height: number;
        protected _onClear(): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The skin data, typically a armature data instance contains at least one skinData.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ????????????????????????????????????????????????????????????????????????
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class SkinData extends BaseObject {
        static toString(): string;
        /**
         * - The skin name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        name: string;
        /**
         * @private
         */
        readonly displays: Map<Array<DisplayData | null>>;
        /**
         * @private
         */
        parent: ArmatureData;
        protected _onClear(): void;
        /**
         * @private
         */
        getDisplay(slotName: string, displayName: string): DisplayData | null;
        /**
         * @private
         */
        getDisplays(slotName: string): Array<DisplayData | null> | null;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * @private
     */
    class GeometryData {
        isShared: boolean;
        inheritDeform: boolean;
        offset: number;
        data: DragonBonesData;
        weight: WeightData | null;
        clear(): void;
        shareFrom(value: GeometryData): void;
        readonly vertexCount: number;
        readonly triangleCount: number;
    }
    /**
     * @private
     */
    abstract class DisplayData extends BaseObject {
        type: DisplayType;
        name: string;
        path: string;
        readonly transform: Transform;
        parent: SkinData;
        protected _onClear(): void;
    }
    /**
     * @private
     */
    class ImageDisplayData extends DisplayData {
        static toString(): string;
        readonly pivot: Point;
        texture: TextureData | null;
        protected _onClear(): void;
    }
    /**
     * @private
     */
    class ArmatureDisplayData extends DisplayData {
        static toString(): string;
        inheritAnimation: boolean;
        readonly actions: ActionData[];
        armature: ArmatureData | null;
        protected _onClear(): void;
        /**
         * @private
         */
        addAction(value: ActionData): void;
    }
    /**
     * @private
     */
    class MeshDisplayData extends DisplayData {
        static toString(): string;
        readonly geometry: GeometryData;
        texture: TextureData | null;
        protected _onClear(): void;
    }
    /**
     * @private
     */
    class BoundingBoxDisplayData extends DisplayData {
        static toString(): string;
        boundingBox: BoundingBoxData | null;
        protected _onClear(): void;
    }
    /**
     * @private
     */
    class PathDisplayData extends DisplayData {
        static toString(): string;
        closed: boolean;
        constantSpeed: boolean;
        readonly geometry: GeometryData;
        readonly curveLengths: number[];
        protected _onClear(): void;
    }
    /**
     * @private
     */
    class WeightData extends BaseObject {
        static toString(): string;
        count: number;
        offset: number;
        readonly bones: BoneData[];
        protected _onClear(): void;
        addBone(value: BoneData): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The core class of bounding box data.
     * @see dragonBones.RectangleData
     * @see dragonBones.EllipseData
     * @see dragonBones.PolygonData
     * @version DragonBones 5.0
     * @language en_US
     */
    /**
     * - ????????????????????????
     * @see dragonBones.RectangleData
     * @see dragonBones.EllipseData
     * @see dragonBones.PolygonData
     * @version DragonBones 5.0
     * @language zh_CN
     */
    abstract class BoundingBoxData extends BaseObject {
        /**
         * - The bounding box type.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ??????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        type: BoundingBoxType;
        /**
         * @private
         */
        color: number;
        /**
         * @private
         */
        width: number;
        /**
         * @private
         */
        height: number;
        protected _onClear(): void;
        /**
         * - Check whether the bounding box contains a specific point. (Local coordinate system)
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ????????????????????????????????????????????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        abstract containsPoint(pX: number, pY: number): boolean;
        /**
         * - Check whether the bounding box intersects a specific segment. (Local coordinate system)
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????????????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        abstract intersectsSegment(xA: number, yA: number, xB: number, yB: number, intersectionPointA: {
            x: number;
            y: number;
        } | null, intersectionPointB: {
            x: number;
            y: number;
        } | null, normalRadians: {
            x: number;
            y: number;
        } | null): number;
    }
    /**
     * - The rectangle bounding box data.
     * @version DragonBones 5.1
     * @language en_US
     */
    /**
     * - ????????????????????????
     * @version DragonBones 5.1
     * @language zh_CN
     */
    class RectangleBoundingBoxData extends BoundingBoxData {
        static toString(): string;
        /**
         * - Compute the bit code for a point (x, y) using the clip rectangle
         */
        private static _computeOutCode;
        /**
         * @private
         */
        static rectangleIntersectsSegment(xA: number, yA: number, xB: number, yB: number, xMin: number, yMin: number, xMax: number, yMax: number, intersectionPointA?: {
            x: number;
            y: number;
        } | null, intersectionPointB?: {
            x: number;
            y: number;
        } | null, normalRadians?: {
            x: number;
            y: number;
        } | null): number;
        protected _onClear(): void;
        /**
         * @inheritDoc
         */
        containsPoint(pX: number, pY: number): boolean;
        /**
         * @inheritDoc
         */
        intersectsSegment(xA: number, yA: number, xB: number, yB: number, intersectionPointA?: {
            x: number;
            y: number;
        } | null, intersectionPointB?: {
            x: number;
            y: number;
        } | null, normalRadians?: {
            x: number;
            y: number;
        } | null): number;
    }
    /**
     * - The ellipse bounding box data.
     * @version DragonBones 5.1
     * @language en_US
     */
    /**
     * - ????????????????????????
     * @version DragonBones 5.1
     * @language zh_CN
     */
    class EllipseBoundingBoxData extends BoundingBoxData {
        static toString(): string;
        /**
         * @private
         */
        static ellipseIntersectsSegment(xA: number, yA: number, xB: number, yB: number, xC: number, yC: number, widthH: number, heightH: number, intersectionPointA?: {
            x: number;
            y: number;
        } | null, intersectionPointB?: {
            x: number;
            y: number;
        } | null, normalRadians?: {
            x: number;
            y: number;
        } | null): number;
        protected _onClear(): void;
        /**
         * @inheritDoc
         */
        containsPoint(pX: number, pY: number): boolean;
        /**
         * @inheritDoc
         */
        intersectsSegment(xA: number, yA: number, xB: number, yB: number, intersectionPointA?: {
            x: number;
            y: number;
        } | null, intersectionPointB?: {
            x: number;
            y: number;
        } | null, normalRadians?: {
            x: number;
            y: number;
        } | null): number;
    }
    /**
     * - The polygon bounding box data.
     * @version DragonBones 5.1
     * @language en_US
     */
    /**
     * - ???????????????????????????
     * @version DragonBones 5.1
     * @language zh_CN
     */
    class PolygonBoundingBoxData extends BoundingBoxData {
        static toString(): string;
        /**
         * @private
         */
        static polygonIntersectsSegment(xA: number, yA: number, xB: number, yB: number, vertices: number[], intersectionPointA?: {
            x: number;
            y: number;
        } | null, intersectionPointB?: {
            x: number;
            y: number;
        } | null, normalRadians?: {
            x: number;
            y: number;
        } | null): number;
        /**
         * @private
         */
        x: number;
        /**
         * @private
         */
        y: number;
        /**
         * - The polygon vertices.
         * @version DragonBones 5.1
         * @language en_US
         */
        /**
         * - ??????????????????
         * @version DragonBones 5.1
         * @language zh_CN
         */
        readonly vertices: number[];
        protected _onClear(): void;
        /**
         * @inheritDoc
         */
        containsPoint(pX: number, pY: number): boolean;
        /**
         * @inheritDoc
         */
        intersectsSegment(xA: number, yA: number, xB: number, yB: number, intersectionPointA?: {
            x: number;
            y: number;
        } | null, intersectionPointB?: {
            x: number;
            y: number;
        } | null, normalRadians?: {
            x: number;
            y: number;
        } | null): number;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The animation data.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ???????????????
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class AnimationData extends BaseObject {
        static toString(): string;
        /**
         * @private
         */
        blendType: AnimationBlendType;
        /**
         * - The frame count of the animation.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        frameCount: number;
        /**
         * - The play times of the animation. [0: Loop play, [1~N]: Play N times]
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????????????? [0: ??????????????????, [1~N]: ???????????? N ???]
         * @version DragonBones 3.0
         * @language zh_CN
         */
        playTimes: number;
        /**
         * - The duration of the animation. (In seconds)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????????????? ?????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        duration: number;
        /**
         * @private
         */
        scale: number;
        /**
         * - The fade in time of the animation. (In seconds)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????????????? ?????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        fadeInTime: number;
        /**
         * @private
         */
        cacheFrameRate: number;
        /**
         * - The animation name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        name: string;
        /**
         * @private
         */
        readonly cachedFrames: boolean[];
        /**
         * @private
         */
        readonly boneTimelines: Map<TimelineData[]>;
        /**
         * @private
         */
        readonly slotTimelines: Map<TimelineData[]>;
        /**
         * @private
         */
        readonly constraintTimelines: Map<TimelineData[]>;
        /**
         * @private
         */
        readonly animationTimelines: Map<TimelineData[]>;
        /**
         * @private
         */
        readonly boneCachedFrameIndices: Map<number[]>;
        /**
         * @private
         */
        readonly slotCachedFrameIndices: Map<number[]>;
        /**
         * @private
         */
        actionTimeline: TimelineData | null;
        /**
         * @private
         */
        zOrderTimeline: TimelineData | null;
        /**
         * @private
         */
        parent: ArmatureData;
        protected _onClear(): void;
        /**
         * @private
         */
        addBoneTimeline(timelineName: string, timeline: TimelineData): void;
        /**
         * @private
         */
        addSlotTimeline(timelineName: string, timeline: TimelineData): void;
        /**
         * @private
         */
        addConstraintTimeline(timelineName: string, timeline: TimelineData): void;
        /**
         * @private
         */
        addAnimationTimeline(timelineName: string, timeline: TimelineData): void;
        /**
         * @private
         */
        getBoneTimelines(timelineName: string): TimelineData[] | null;
        /**
         * @private
         */
        getSlotTimelines(timelineName: string): TimelineData[] | null;
        /**
         * @private
         */
        getConstraintTimelines(timelineName: string): TimelineData[] | null;
        /**
         * @private
         */
        getAnimationTimelines(timelineName: string): TimelineData[] | null;
        /**
         * @private
         */
        getBoneCachedFrameIndices(boneName: string): number[] | null;
        /**
         * @private
         */
        getSlotCachedFrameIndices(slotName: string): number[] | null;
    }
    /**
     * @private
     */
    class TimelineData extends BaseObject {
        static toString(): string;
        type: TimelineType;
        offset: number;
        frameIndicesOffset: number;
        protected _onClear(): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The animation config is used to describe all the information needed to play an animation state.
     * The API is still in the experimental phase and may encounter bugs or stability or compatibility issues when used.
     * @see dragonBones.AnimationState
     * @beta
     * @version DragonBones 5.0
     * @language en_US
     */
    /**
     * - ???????????????????????????????????????????????????????????????????????????
     * ??? API ?????????????????????????????????????????? bug ?????????????????????????????????
     * @see dragonBones.AnimationState
     * @beta
     * @version DragonBones 5.0
     * @language zh_CN
     */
    class AnimationConfig extends BaseObject {
        static toString(): string;
        /**
         * @private
         */
        pauseFadeOut: boolean;
        /**
         * - Fade out the pattern of other animation states when the animation state is fade in.
         * This property is typically used to specify the substitution of multiple animation states blend.
         * @default dragonBones.AnimationFadeOutMode.All
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????????????????????
         * ??????????????????????????????????????????????????????????????????????????????
         * @default dragonBones.AnimationFadeOutMode.All
         * @version DragonBones 5.0
         * @language zh_CN
         */
        fadeOutMode: AnimationFadeOutMode;
        /**
         * @private
         */
        fadeOutTweenType: TweenType;
        /**
         * @private
         */
        fadeOutTime: number;
        /**
         * @private
         */
        pauseFadeIn: boolean;
        /**
         * @private
         */
        actionEnabled: boolean;
        /**
         * @private
         */
        additive: boolean;
        /**
         * - Whether the animation state has control over the display property of the slots.
         * Sometimes blend a animation state does not want it to control the display properties of the slots,
         * especially if other animation state are controlling the display properties of the slots.
         * @default true
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????????????????????????????
         * ?????????????????????????????????????????????????????????????????????????????????
         * ??????????????????????????????????????????????????????????????????????????????
         * @default true
         * @version DragonBones 5.0
         * @language zh_CN
         */
        displayControl: boolean;
        /**
         * - Whether to reset the objects without animation to the armature pose when the animation state is start to play.
         * This property should usually be set to false when blend multiple animation states.
         * @default true
         * @version DragonBones 5.1
         * @language en_US
         */
        /**
         * - ????????????????????????????????????????????????????????????????????????????????????
         * ??????????????????????????????????????????????????????????????? false???
         * @default true
         * @version DragonBones 5.1
         * @language zh_CN
         */
        resetToPose: boolean;
        /**
         * @private
         */
        fadeInTweenType: TweenType;
        /**
         * - The play times. [0: Loop play, [1~N]: Play N times]
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????? [0: ??????????????????, [1~N]: ???????????? N ???]
         * @version DragonBones 3.0
         * @language zh_CN
         */
        playTimes: number;
        /**
         * - The blend layer.
         * High layer animation state will get the blend weight first.
         * When the blend weight is assigned more than 1, the remaining animation states will no longer get the weight assigned.
         * @readonly
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????
         * ??????????????????????????????????????????????????????
         * ??????????????????????????? 1 ?????????????????????????????????????????????????????????
         * @readonly
         * @version DragonBones 5.0
         * @language zh_CN
         */
        layer: number;
        /**
         * - The start time of play. (In seconds)
         * @default 0.0
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????????????? ?????????????????????
         * @default 0.0
         * @version DragonBones 5.0
         * @language zh_CN
         */
        position: number;
        /**
         * - The duration of play.
         * [-1: Use the default value of the animation data, 0: Stop play, (0~N]: The duration] (In seconds)
         * @default -1.0
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ????????????????????????
         * [-1: ???????????????????????????, 0: ????????????, (0~N]: ????????????] ?????????????????????
         * @default -1.0
         * @version DragonBones 5.0
         * @language zh_CN
         */
        duration: number;
        /**
         * - The play speed.
         * The value is an overlay relationship with {@link dragonBones.Animation#timeScale}.
         * [(-N~0): Reverse play, 0: Stop play, (0~1): Slow play, 1: Normal play, (1~N): Fast play]
         * @default 1.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * ????????? {@link dragonBones.Animation#timeScale} ??????????????????
         * [(-N~0): ????????????, 0: ????????????, (0~1): ????????????, 1: ????????????, (1~N): ????????????]
         * @default 1.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        timeScale: number;
        /**
         * - The blend weight.
         * @default 1.0
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @default 1.0
         * @version DragonBones 5.0
         * @language zh_CN
         */
        weight: number;
        /**
         * - The fade in time.
         * [-1: Use the default value of the animation data, [0~N]: The fade in time] (In seconds)
         * @default -1.0
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????
         * [-1: ???????????????????????????, [0~N]: ????????????] ?????????????????????
         * @default -1.0
         * @version DragonBones 5.0
         * @language zh_CN
         */
        fadeInTime: number;
        /**
         * - The auto fade out time when the animation state play completed.
         * [-1: Do not fade out automatically, [0~N]: The fade out time] (In seconds)
         * @default -1.0
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????????????????
         * [-1: ???????????????, [0~N]: ????????????] ?????????????????????
         * @default -1.0
         * @version DragonBones 5.0
         * @language zh_CN
         */
        autoFadeOutTime: number;
        /**
         * - The name of the animation state. (Can be different from the name of the animation data)
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ????????????????????? ?????????????????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        name: string;
        /**
         * - The animation data name.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        animation: string;
        /**
         * - The blend group name of the animation state.
         * This property is typically used to specify the substitution of multiple animation states blend.
         * @readonly
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ??????????????????
         * ??????????????????????????????????????????????????????????????????????????????
         * @readonly
         * @version DragonBones 5.0
         * @language zh_CN
         */
        group: string;
        /**
         * @private
         */
        readonly boneMask: string[];
        protected _onClear(): void;
        /**
         * @private
         */
        clear(): void;
        /**
         * @private
         */
        copyFrom(value: AnimationConfig): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The texture atlas data.
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ??????????????????
     * @version DragonBones 3.0
     * @language zh_CN
     */
    abstract class TextureAtlasData extends BaseObject {
        /**
         * @private
         */
        autoSearch: boolean;
        /**
         * @private
         */
        width: number;
        /**
         * @private
         */
        height: number;
        /**
         * @private
         */
        scale: number;
        /**
         * - The texture atlas name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        name: string;
        /**
         * - The image path of the texture atlas.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        imagePath: string;
        /**
         * @private
         */
        readonly textures: Map<TextureData>;
        protected _onClear(): void;
        /**
         * @private
         */
        copyFrom(value: TextureAtlasData): void;
        /**
         * @private
         */
        getTexture(textureName: string): TextureData | null;
    }
    /**
     * @private
     */
    abstract class TextureData extends BaseObject {
        static createRectangle(): Rectangle;
        rotated: boolean;
        name: string;
        readonly region: Rectangle;
        parent: TextureAtlasData;
        frame: Rectangle | null;
        protected _onClear(): void;
        copyFrom(value: TextureData): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The armature proxy interface, the docking engine needs to implement it concretely.
     * @see dragonBones.Armature
     * @version DragonBones 5.0
     * @language en_US
     */
    /**
     * - ?????????????????????????????????????????????????????????????????????
     * @see dragonBones.Armature
     * @version DragonBones 5.0
     * @language zh_CN
     */
    interface IArmatureProxy extends IEventDispatcher {
        /**
         * - Dispose the instance and the Armature instance. (The Armature instance will return to the object pool)
         * @example
         * <pre>
         *     removeChild(armatureDisplay);
         *     armatureDisplay.dispose();
         * </pre>
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ??????????????????????????? ?????????????????????????????????
         * @example
         * <pre>
         *     removeChild(armatureDisplay);
         *     armatureDisplay.dispose();
         * </pre>
         * @version DragonBones 4.5
         * @language zh_CN
         */
        dispose(disposeProxy: boolean): void;
        /**
         * - The armature.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        readonly armature: Armature;
        /**
         * - The animation player.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly animation: Animation;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - Armature is the core of the skeleton animation system.
     * @see dragonBones.ArmatureData
     * @see dragonBones.Bone
     * @see dragonBones.Slot
     * @see dragonBones.Animation
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ???????????????????????????????????????
     * @see dragonBones.ArmatureData
     * @see dragonBones.Bone
     * @see dragonBones.Slot
     * @see dragonBones.Animation
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class Armature extends BaseObject implements IAnimatable {
        static toString(): string;
        private static _onSortSlots;
        /**
         * - Whether to inherit the animation control of the parent armature.
         * True to try to have the child armature play an animation with the same name when the parent armature play the animation.
         * @default true
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????
         * ??????????????? true???????????????????????????????????????????????????????????????????????????
         * @default true
         * @version DragonBones 4.5
         * @language zh_CN
         */
        inheritAnimation: boolean;
        /**
         * @private
         */
        userData: any;
        private _slotsDirty;
        private _zOrderDirty;
        private _flipX;
        private _flipY;
        private _alpha;
        private readonly _bones;
        private readonly _slots;
        private readonly _actions;
        private _animation;
        private _proxy;
        private _display;
        private _replacedTexture;
        private _clock;
        protected _onClear(): void;
        /**
         * - Dispose the armature. (Return to the object pool)
         * @example
         * <pre>
         *     removeChild(armature.display);
         *     armature.dispose();
         * </pre>
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????? ????????????????????????
         * @example
         * <pre>
         *     removeChild(armature.display);
         *     armature.dispose();
         * </pre>
         * @version DragonBones 3.0
         * @language zh_CN
         */
        dispose(): void;
        /**
         * @inheritDoc
         */
        advanceTime(passedTime: number): void;
        /**
         * - Forces a specific bone or its owning slot to update the transform or display property in the next frame.
         * @param boneName - The bone name. (If not set, all bones will be update)
         * @param updateSlot - Whether to update the bone's slots. (Default: false)
         * @see dragonBones.Bone#invalidUpdate()
         * @see dragonBones.Slot#invalidUpdate()
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????????????????????????????????????????????
         * @param boneName - ??????????????? ?????????????????????????????????????????????
         * @param updateSlot - ?????????????????????????????? ?????????: false???
         * @see dragonBones.Bone#invalidUpdate()
         * @see dragonBones.Slot#invalidUpdate()
         * @version DragonBones 3.0
         * @language zh_CN
         */
        invalidUpdate(boneName?: string | null, updateSlot?: boolean): void;
        /**
         * - Check whether a specific point is inside a custom bounding box in a slot.
         * The coordinate system of the point is the inner coordinate system of the armature.
         * Custom bounding boxes need to be customized in Dragonbones Pro.
         * @param x - The horizontal coordinate of the point.
         * @param y - The vertical coordinate of the point.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????????????????????????????
         * ???????????????????????????????????????
         * ??????????????????????????? DragonBones Pro ???????????????
         * @param x - ?????????????????????
         * @param y - ?????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        containsPoint(x: number, y: number): Slot | null;
        /**
         * - Check whether a specific segment intersects a custom bounding box for a slot in the armature.
         * The coordinate system of the segment and intersection is the inner coordinate system of the armature.
         * Custom bounding boxes need to be customized in Dragonbones Pro.
         * @param xA - The horizontal coordinate of the beginning of the segment.
         * @param yA - The vertical coordinate of the beginning of the segment.
         * @param xB - The horizontal coordinate of the end point of the segment.
         * @param yB - The vertical coordinate of the end point of the segment.
         * @param intersectionPointA - The first intersection at which a line segment intersects the bounding box from the beginning to the end. (If not set, the intersection point will not calculated)
         * @param intersectionPointB - The first intersection at which a line segment intersects the bounding box from the end to the beginning. (If not set, the intersection point will not calculated)
         * @param normalRadians - The normal radians of the tangent of the intersection boundary box. [x: Normal radian of the first intersection tangent, y: Normal radian of the second intersection tangent] (If not set, the normal will not calculated)
         * @returns The slot of the first custom bounding box where the segment intersects from the start point to the end point.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????????????????????????????????????????
         * ??????????????????????????????????????????????????????
         * ??????????????????????????? DragonBones Pro ???????????????
         * @param xA - ??????????????????????????????
         * @param yA - ??????????????????????????????
         * @param xB - ??????????????????????????????
         * @param yB - ??????????????????????????????
         * @param intersectionPointA - ??????????????????????????????????????????????????????????????? ??????????????????????????????????????????
         * @param intersectionPointB - ??????????????????????????????????????????????????????????????? ??????????????????????????????????????????
         * @param normalRadians - ??????????????????????????????????????? [x: ????????????????????????????????????, y: ????????????????????????????????????] ??????????????????????????????????????????
         * @returns ????????????????????????????????????????????????????????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        intersectsSegment(xA: number, yA: number, xB: number, yB: number, intersectionPointA?: {
            x: number;
            y: number;
        } | null, intersectionPointB?: {
            x: number;
            y: number;
        } | null, normalRadians?: {
            x: number;
            y: number;
        } | null): Slot | null;
        /**
         * - Get a specific bone.
         * @param name - The bone name.
         * @see dragonBones.Bone
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????
         * @param name - ???????????????
         * @see dragonBones.Bone
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getBone(name: string): Bone | null;
        /**
         * - Get a specific bone by the display.
         * @param display - The display object.
         * @see dragonBones.Bone
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????
         * @param display - ???????????????
         * @see dragonBones.Bone
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getBoneByDisplay(display: any): Bone | null;
        /**
         * - Get a specific slot.
         * @param name - The slot name.
         * @see dragonBones.Slot
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????
         * @param name - ???????????????
         * @see dragonBones.Slot
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getSlot(name: string): Slot | null;
        /**
         * - Get a specific slot by the display.
         * @param display - The display object.
         * @see dragonBones.Slot
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????
         * @param display - ???????????????
         * @see dragonBones.Slot
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getSlotByDisplay(display: any): Slot | null;
        /**
         * - Get all bones.
         * @see dragonBones.Bone
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????
         * @see dragonBones.Bone
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getBones(): Bone[];
        /**
         * - Get all slots.
         * @see dragonBones.Slot
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????
         * @see dragonBones.Slot
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getSlots(): Slot[];
        /**
         * - Whether to flip the armature horizontally.
         * @version DragonBones 5.5
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @version DragonBones 5.5
         * @language zh_CN
         */
        flipX: boolean;
        /**
         * - Whether to flip the armature vertically.
         * @version DragonBones 5.5
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @version DragonBones 5.5
         * @language zh_CN
         */
        flipY: boolean;
        /**
         * - The animation cache frame rate, which turns on the animation cache when the set value is greater than 0.
         * There is a certain amount of memory overhead to improve performance by caching animation data in memory.
         * The frame rate should not be set too high, usually with the frame rate of the animation is similar and lower than the program running frame rate.
         * When the animation cache is turned on, some features will fail, such as the offset property of bone.
         * @example
         * <pre>
         *     armature.cacheFrameRate = 24;
         * </pre>
         * @see dragonBones.DragonBonesData#frameRate
         * @see dragonBones.ArmatureData#frameRate
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????? 0 ????????????????????????????????????
         * ?????????????????????????????????????????????????????????????????????????????????????????????
         * ?????????????????????????????????????????????????????????????????????????????????????????????
         * ?????????????????????????????????????????????????????????????????? offset ????????????
         * @example
         * <pre>
         *     armature.cacheFrameRate = 24;
         * </pre>
         * @see dragonBones.DragonBonesData#frameRate
         * @see dragonBones.ArmatureData#frameRate
         * @version DragonBones 4.5
         * @language zh_CN
         */
        cacheFrameRate: number;
        /**
         * - The armature name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly name: string;
        /**
         * - The armature data.
         * @see dragonBones.ArmatureData
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????
         * @see dragonBones.ArmatureData
         * @version DragonBones 4.5
         * @language zh_CN
         */
        readonly armatureData: ArmatureData;
        /**
         * - The animation player.
         * @see dragonBones.Animation
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????
         * @see dragonBones.Animation
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly animation: Animation;
        /**
         * @pivate
         */
        readonly proxy: IArmatureProxy;
        /**
         * - The EventDispatcher instance of the armature.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????? EventDispatcher ?????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        readonly eventDispatcher: IEventDispatcher;
        /**
         * - The display container.
         * The display of the slot is displayed as the parent.
         * Depending on the rendering engine, the type will be different, usually the DisplayObjectContainer type.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????
         * ?????????????????????????????????????????????????????????
         * ????????????????????????????????????????????????????????? DisplayObjectContainer ?????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly display: any;
        /**
         * @private
         */
        replacedTexture: any;
        /**
         * @inheritDoc
         */
        clock: WorldClock | null;
        /**
         * - Get the parent slot which the armature belongs to.
         * @see dragonBones.Slot
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @see dragonBones.Slot
         * @version DragonBones 4.5
         * @language zh_CN
         */
        readonly parent: Slot | null;
        /**
         * - Deprecated, please refer to {@link #display}.
         * @deprecated
         * @language en_US
         */
        /**
         * - ????????????????????? {@link #display}???
         * @deprecated
         * @language zh_CN
         */
        getDisplay(): any;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The core class of the transform object.
     * @see dragonBones.Transform
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - ????????????????????????
     * @see dragonBones.Transform
     * @version DragonBones 4.5
     * @language zh_CN
     */
    abstract class TransformObject extends BaseObject {
        protected static readonly _helpMatrix: Matrix;
        protected static readonly _helpTransform: Transform;
        protected static readonly _helpPoint: Point;
        /**
         * - A matrix relative to the armature coordinate system.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly globalTransformMatrix: Matrix;
        /**
         * - A transform relative to the armature coordinate system.
         * @see #updateGlobalTransform()
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????????????????
         * @see #updateGlobalTransform()
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly global: Transform;
        /**
         * - The offset transform relative to the armature or the parent bone coordinate system.
         * @see #dragonBones.Bone#invalidUpdate()
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????????????????
         * @see #dragonBones.Bone#invalidUpdate()
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly offset: Transform;
        /**
         * @private
         */
        origin: Transform | null;
        /**
         * @private
         */
        userData: any;
        protected _globalDirty: boolean;
        /**
         */
        protected _onClear(): void;
        /**
         * - For performance considerations, rotation or scale in the {@link #global} attribute of the bone or slot is not always properly accessible,
         * some engines do not rely on these attributes to update rendering, such as Egret.
         * The use of this method ensures that the access to the {@link #global} property is correctly rotation or scale.
         * @example
         * <pre>
         *     bone.updateGlobalTransform();
         *     let rotation = bone.global.rotation;
         * </pre>
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????? {@link #global} ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? Egret???
         * ???????????????????????????????????? {@link #global} ????????????????????????????????????
         * @example
         * <pre>
         *     bone.updateGlobalTransform();
         *     let rotation = bone.global.rotation;
         * </pre>
         * @version DragonBones 3.0
         * @language zh_CN
         */
        updateGlobalTransform(): void;
        /**
         * - The armature to which it belongs.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly armature: Armature;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - Bone is one of the most important logical units in the armature animation system,
     * and is responsible for the realization of translate, rotation, scaling in the animations.
     * A armature can contain multiple bones.
     * @see dragonBones.BoneData
     * @see dragonBones.Armature
     * @see dragonBones.Slot
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
     * ??????????????????????????????????????????
     * @see dragonBones.BoneData
     * @see dragonBones.Armature
     * @see dragonBones.Slot
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class Bone extends TransformObject {
        static toString(): string;
        /**
         * - The offset mode.
         * @see #offset
         * @version DragonBones 5.5
         * @language en_US
         */
        /**
         * - ???????????????
         * @see #offset
         * @version DragonBones 5.5
         * @language zh_CN
         */
        offsetMode: OffsetMode;
        protected _localDirty: boolean;
        protected _visible: boolean;
        protected _cachedFrameIndex: number;
        /**
         * @private
         */
        protected _parent: Bone | null;
        protected _onClear(): void;
        protected _updateGlobalTransformMatrix(isCache: boolean): void;
        /**
         * - Forces the bone to update the transform in the next frame.
         * When the bone is not animated or its animation state is finished, the bone will not continue to update,
         * and when the skeleton must be updated for some reason, the method needs to be called explicitly.
         * @example
         * <pre>
         *     let bone = armature.getBone("arm");
         *     bone.offset.scaleX = 2.0;
         *     bone.invalidUpdate();
         * </pre>
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????
         * ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
         * @example
         * <pre>
         *     let bone = armature.getBone("arm");
         *     bone.offset.scaleX = 2.0;
         *     bone.invalidUpdate();
         * </pre>
         * @version DragonBones 3.0
         * @language zh_CN
         */
        invalidUpdate(): void;
        /**
         * - Check whether the bone contains a specific bone.
         * @see dragonBones.Bone
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????????
         * @see dragonBones.Bone
         * @version DragonBones 3.0
         * @language zh_CN
         */
        contains(value: Bone): boolean;
        /**
         * - The bone data.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        readonly boneData: BoneData;
        /**
         * - The visible of all slots in the bone.
         * @default true
         * @see dragonBones.Slot#visible
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????????????????
         * @default true
         * @see dragonBones.Slot#visible
         * @version DragonBones 3.0
         * @language zh_CN
         */
        visible: boolean;
        /**
         * - The bone name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly name: string;
        /**
         * - The parent bone to which it belongs.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly parent: Bone | null;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * @private
     */
    class DisplayFrame extends BaseObject {
        static toString(): string;
        rawDisplayData: DisplayData | null;
        displayData: DisplayData | null;
        textureData: TextureData | null;
        display: any | Armature | null;
        readonly deformVertices: number[];
        protected _onClear(): void;
        updateDeformVertices(): void;
        getGeometryData(): GeometryData | null;
        getBoundingBox(): BoundingBoxData | null;
        getTextureData(): TextureData | null;
    }
    /**
     * - The slot attached to the armature, controls the display status and properties of the display object.
     * A bone can contain multiple slots.
     * A slot can contain multiple display objects, displaying only one of the display objects at a time,
     * but you can toggle the display object into frame animation while the animation is playing.
     * The display object can be a normal texture, or it can be a display of a child armature, a grid display object,
     * and a custom other display object.
     * @see dragonBones.Armature
     * @see dragonBones.Bone
     * @see dragonBones.SlotData
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ????????????????????????????????????????????????????????????????????????
     * ??????????????????????????????????????????
     * ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
     * ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
     * @see dragonBones.Armature
     * @see dragonBones.Bone
     * @see dragonBones.SlotData
     * @version DragonBones 3.0
     * @language zh_CN
     */
    abstract class Slot extends TransformObject {
        /**
         * - Displays the animated state or mixed group name controlled by the object, set to null to be controlled by all animation states.
         * @default null
         * @see dragonBones.AnimationState#displayControl
         * @see dragonBones.AnimationState#name
         * @see dragonBones.AnimationState#group
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ????????????????????????????????????????????????????????????????????? null ??????????????????????????????????????????
         * @default null
         * @see dragonBones.AnimationState#displayControl
         * @see dragonBones.AnimationState#name
         * @see dragonBones.AnimationState#group
         * @version DragonBones 4.5
         * @language zh_CN
         */
        displayController: string | null;
        protected _displayDataDirty: boolean;
        protected _displayDirty: boolean;
        protected _geometryDirty: boolean;
        protected _textureDirty: boolean;
        protected _visibleDirty: boolean;
        protected _blendModeDirty: boolean;
        protected _zOrderDirty: boolean;
        protected _transformDirty: boolean;
        protected _visible: boolean;
        protected _blendMode: BlendMode;
        protected _displayIndex: number;
        protected _animationDisplayIndex: number;
        protected _cachedFrameIndex: number;
        protected readonly _localMatrix: Matrix;
        protected _boundingBoxData: BoundingBoxData | null;
        protected _textureData: TextureData | null;
        protected _rawDisplay: any;
        protected _meshDisplay: any;
        protected _display: any | null;
        protected _childArmature: Armature | null;
        /**
         * @private
         */
        protected _parent: Bone;
        protected _onClear(): void;
        protected abstract _initDisplay(value: any, isRetain: boolean): void;
        protected abstract _disposeDisplay(value: any, isRelease: boolean): void;
        protected abstract _onUpdateDisplay(): void;
        protected abstract _addDisplay(): void;
        protected abstract _replaceDisplay(value: any): void;
        protected abstract _removeDisplay(): void;
        protected abstract _updateZOrder(): void;
        protected abstract _updateBlendMode(): void;
        protected abstract _updateColor(): void;
        protected abstract _updateFrame(): void;
        protected abstract _updateMesh(): void;
        protected abstract _updateTransform(): void;
        protected abstract _identityTransform(): void;
        protected _hasDisplay(display: any): boolean;
        protected _updateDisplayData(): void;
        protected _updateDisplay(): void;
        protected _updateGlobalTransformMatrix(isCache: boolean): void;
        /**
         * - Forces the slot to update the state of the display object in the next frame.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        invalidUpdate(): void;
        /**
         * @private
         */
        updateTransformAndMatrix(): void;
        /**
         * @private
         */
        replaceRawDisplayData(displayData: DisplayData | null, index?: number): void;
        /**
         * @private
         */
        replaceDisplayData(displayData: DisplayData | null, index?: number): void;
        /**
         * @private
         */
        replaceTextureData(textureData: TextureData | null, index?: number): void;
        /**
         * @private
         */
        replaceDisplay(value: any | Armature | null, index?: number): void;
        /**
         * - Check whether a specific point is inside a custom bounding box in the slot.
         * The coordinate system of the point is the inner coordinate system of the armature.
         * Custom bounding boxes need to be customized in Dragonbones Pro.
         * @param x - The horizontal coordinate of the point.
         * @param y - The vertical coordinate of the point.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????????????????????
         * ???????????????????????????????????????
         * ??????????????????????????? DragonBones Pro ???????????????
         * @param x - ?????????????????????
         * @param y - ?????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        containsPoint(x: number, y: number): boolean;
        /**
         * - Check whether a specific segment intersects a custom bounding box for the slot.
         * The coordinate system of the segment and intersection is the inner coordinate system of the armature.
         * Custom bounding boxes need to be customized in Dragonbones Pro.
         * @param xA - The horizontal coordinate of the beginning of the segment.
         * @param yA - The vertical coordinate of the beginning of the segment.
         * @param xB - The horizontal coordinate of the end point of the segment.
         * @param yB - The vertical coordinate of the end point of the segment.
         * @param intersectionPointA - The first intersection at which a line segment intersects the bounding box from the beginning to the end. (If not set, the intersection point will not calculated)
         * @param intersectionPointB - The first intersection at which a line segment intersects the bounding box from the end to the beginning. (If not set, the intersection point will not calculated)
         * @param normalRadians - The normal radians of the tangent of the intersection boundary box. [x: Normal radian of the first intersection tangent, y: Normal radian of the second intersection tangent] (If not set, the normal will not calculated)
         * @returns Intersection situation. [1: Disjoint and segments within the bounding box, 0: Disjoint, 1: Intersecting and having a nodal point and ending in the bounding box, 2: Intersecting and having a nodal point and starting at the bounding box, 3: Intersecting and having two intersections, N: Intersecting and having N intersections]
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????????????????????????????
         * ??????????????????????????????????????????????????????
         * ??????????????????????????? DragonBones Pro ???????????????
         * @param xA - ??????????????????????????????
         * @param yA - ??????????????????????????????
         * @param xB - ??????????????????????????????
         * @param yB - ??????????????????????????????
         * @param intersectionPointA - ??????????????????????????????????????????????????????????????? ??????????????????????????????????????????
         * @param intersectionPointB - ??????????????????????????????????????????????????????????????? ??????????????????????????????????????????
         * @param normalRadians - ??????????????????????????????????????? [x: ????????????????????????????????????, y: ????????????????????????????????????] ??????????????????????????????????????????
         * @returns ?????????????????? [-1: ?????????????????????????????????, 0: ?????????, 1: ????????????????????????????????????????????????, 2: ????????????????????????????????????????????????, 3: ????????????????????????, N: ???????????? N ?????????]
         * @version DragonBones 5.0
         * @language zh_CN
         */
        intersectsSegment(xA: number, yA: number, xB: number, yB: number, intersectionPointA?: {
            x: number;
            y: number;
        } | null, intersectionPointB?: {
            x: number;
            y: number;
        } | null, normalRadians?: {
            x: number;
            y: number;
        } | null): number;
        /**
         * @private
         */
        getDisplayFrameAt(index: number): DisplayFrame;
        /**
         * - The visible of slot's display object.
         * @default true
         * @version DragonBones 5.6
         * @language en_US
         */
        /**
         * - ?????????????????????????????????
         * @default true
         * @version DragonBones 5.6
         * @language zh_CN
         */
        visible: boolean;
        /**
         * @private
         */
        displayFrameCount: number;
        /**
         * - The index of the display object displayed in the display list.
         * @example
         * <pre>
         *     let slot = armature.getSlot("weapon");
         *     slot.displayIndex = 3;
         *     slot.displayController = "none";
         * </pre>
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????????????????????
         * @example
         * <pre>
         *     let slot = armature.getSlot("weapon");
         *     slot.displayIndex = 3;
         *     slot.displayController = "none";
         * </pre>
         * @version DragonBones 4.5
         * @language zh_CN
         */
        displayIndex: number;
        /**
         * - The slot name.
         * @see dragonBones.SlotData#name
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @see dragonBones.SlotData#name
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly name: string;
        /**
         * - Contains a display list of display objects or child armatures.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        displayList: any[];
        /**
         * - The slot data.
         * @see dragonBones.SlotData
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????
         * @see dragonBones.SlotData
         * @version DragonBones 4.5
         * @language zh_CN
         */
        readonly slotData: SlotData;
        /**
         * - The custom bounding box data for the slot at current time.
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????
         * @version DragonBones 5.0
         * @language zh_CN
         */
        readonly boundingBoxData: BoundingBoxData | null;
        /**
         * @private
         */
        readonly rawDisplay: any;
        /**
         * @private
         */
        readonly meshDisplay: any;
        /**
         * - The display object that the slot displays at this time.
         * @example
         * <pre>
         *     let slot = armature.getSlot("text");
         *     slot.display = new yourEngine.TextField();
         * </pre>
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????????????????
         * @example
         * <pre>
         *     let slot = armature.getSlot("text");
         *     slot.display = new yourEngine.TextField();
         * </pre>
         * @version DragonBones 3.0
         * @language zh_CN
         */
        display: any;
        /**
         * - The child armature that the slot displayed at current time.
         * @example
         * <pre>
         *     let slot = armature.getSlot("weapon");
         *     let prevChildArmature = slot.childArmature;
         *     if (prevChildArmature) {
         *         prevChildArmature.dispose();
         *     }
         *     slot.childArmature = factory.buildArmature("weapon_blabla", "weapon_blabla_project");
         * </pre>
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????????????????
         * ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
         * @example
         * <pre>
         *     let slot = armature.getSlot("weapon");
         *     let prevChildArmature = slot.childArmature;
         *     if (prevChildArmature) {
         *         prevChildArmature.dispose();
         *     }
         *     slot.childArmature = factory.buildArmature("weapon_blabla", "weapon_blabla_project");
         * </pre>
         * @version DragonBones 3.0
         * @language zh_CN
         */
        childArmature: Armature | null;
        /**
         * - The parent bone to which it belongs.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly parent: Bone;
        /**
         * - Deprecated, please refer to {@link #display}.
         * @deprecated
         * @language en_US
         */
        /**
         * - ????????????????????? {@link #display}???
         * @deprecated
         * @language zh_CN
         */
        getDisplay(): any;
        /**
         * - Deprecated, please refer to {@link #display}.
         * @deprecated
         * @language en_US
         */
        /**
         * - ????????????????????? {@link #display}???
         * @deprecated
         * @language zh_CN
         */
        setDisplay(value: any): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - Play animation interface. (Both Armature and Wordclock implement the interface)
     * Any instance that implements the interface can be added to the Worldclock instance and advance time by Worldclock instance uniformly.
     * @see dragonBones.WorldClock
     * @see dragonBones.Armature
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ????????????????????? (Armature ??? WordClock ?????????????????????)
     * ??????????????????????????????????????????????????? WorldClock ??????????????? WorldClock ???????????????????????????
     * @see dragonBones.WorldClock
     * @see dragonBones.Armature
     * @version DragonBones 3.0
     * @language zh_CN
     */
    interface IAnimatable {
        /**
         * - Advance time.
         * @param passedTime - Passed time. (In seconds)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @param passedTime - ?????????????????? ?????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        advanceTime(passedTime: number): void;
        /**
         * - The Wordclock instance to which the current belongs.
         * @example
         * <pre>
         *     armature.clock = factory.clock; // Add armature to clock.
         *     armature.clock = null; // Remove armature from clock.
         * </pre>
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ??????????????? WordClock ?????????
         * @example
         * <pre>
         *     armature.clock = factory.clock; // ???????????????????????????
         *     armature.clock = null; // ???????????????????????????
         * </pre>
         * @version DragonBones 5.0
         * @language zh_CN
         */
        clock: WorldClock | null;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - Worldclock provides clock support for animations, advance time for each IAnimatable object added to the instance.
     * @see dragonBones.IAnimateble
     * @see dragonBones.Armature
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - WorldClock ???????????????????????????????????????????????????????????? IAnimatable ?????????????????????
     * @see dragonBones.IAnimateble
     * @see dragonBones.Armature
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class WorldClock implements IAnimatable {
        /**
         * - Current time. (In seconds)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????? (???????????????)
         * @version DragonBones 3.0
         * @language zh_CN
         */
        time: number;
        /**
         * - The play speed, used to control animation speed-shift play.
         * [0: Stop play, (0~1): Slow play, 1: Normal play, (1~N): Fast play]
         * @default 1.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????????????????????????????
         * [0: ????????????, (0~1): ????????????, 1: ????????????, (1~N): ????????????]
         * @default 1.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        timeScale: number;
        private _systemTime;
        private readonly _animatebles;
        private _clock;
        /**
         * - Creating a Worldclock instance. Typically, you do not need to create Worldclock instance.
         * When multiple Worldclock instances are running at different speeds, can achieving some specific animation effects, such as bullet time.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????? WorldClock ????????????????????????????????? WorldClock ?????????
         * ????????? WorldClock ?????????????????????????????????????????????????????????????????????????????????????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        constructor(time?: number);
        /**
         * - Advance time for all IAnimatable instances.
         * @param passedTime - Passed time. [-1: Automatically calculates the time difference between the current frame and the previous frame, [0~N): Passed time] (In seconds)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????? IAnimatable ?????????????????????
         * @param passedTime - ?????????????????? [-1: ?????????????????????????????????????????????, [0~N): ???????????????] (???????????????)
         * @version DragonBones 3.0
         * @language zh_CN
         */
        advanceTime(passedTime: number): void;
        /**
         * - Check whether contains a specific instance of IAnimatable.
         * @param value - The IAnimatable instance.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????? IAnimatable ?????????
         * @param value - IAnimatable ?????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        contains(value: IAnimatable): boolean;
        /**
         * - Add IAnimatable instance.
         * @param value - The IAnimatable instance.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????? IAnimatable ?????????
         * @param value - IAnimatable ?????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        add(value: IAnimatable): void;
        /**
         * - Removes a specified IAnimatable instance.
         * @param value - The IAnimatable instance.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????? IAnimatable ?????????
         * @param value - IAnimatable ?????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        remove(value: IAnimatable): void;
        /**
         * - Clear all IAnimatable instances.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????? IAnimatable ?????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        clear(): void;
        /**
         * @inheritDoc
         */
        clock: WorldClock | null;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The animation player is used to play the animation data and manage the animation states.
     * @see dragonBones.AnimationData
     * @see dragonBones.AnimationState
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ???????????????????????????????????????????????????????????????
     * @see dragonBones.AnimationData
     * @see dragonBones.AnimationState
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class Animation extends BaseObject {
        static toString(): string;
        /**
         * - The play speed of all animations. [0: Stop, (0~1): Slow, 1: Normal, (1~N): Fast]
         * @default 1.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????????????? [0: ????????????, (0~1): ????????????, 1: ????????????, (1~N): ????????????]
         * @default 1.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        timeScale: number;
        /**
         * Update bones and slots cachedFrameIndices.
         */
        private _animationDirty;
        private _inheritTimeScale;
        private readonly _animationNames;
        private readonly _animationStates;
        private readonly _animations;
        private readonly _blendStates;
        private _armature;
        private _animationConfig;
        private _lastAnimationState;
        protected _onClear(): void;
        private _fadeOut;
        /**
         * - Clear all animations states.
         * @see dragonBones.AnimationState
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @see dragonBones.AnimationState
         * @version DragonBones 4.5
         * @language zh_CN
         */
        reset(): void;
        /**
         * - Pause a specific animation state.
         * @param animationName - The name of animation state. (If not set, it will pause all animations)
         * @see dragonBones.AnimationState
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????????????????
         * @param animationName - ????????????????????? ?????????????????????????????????????????????
         * @see dragonBones.AnimationState
         * @version DragonBones 3.0
         * @language zh_CN
         */
        stop(animationName?: string | null): void;
        /**
         * - Play animation with a specific animation config.
         * The API is still in the experimental phase and may encounter bugs or stability or compatibility issues when used.
         * @param animationConfig - The animation config.
         * @returns The playing animation state.
         * @see dragonBones.AnimationConfig
         * @beta
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????????
         * ??? API ?????????????????????????????????????????? bug ?????????????????????????????????
         * @param animationConfig - ???????????????
         * @returns ????????????????????????
         * @see dragonBones.AnimationConfig
         * @beta
         * @version DragonBones 5.0
         * @language zh_CN
         */
        playConfig(animationConfig: AnimationConfig): AnimationState | null;
        /**
         * - Play a specific animation.
         * @param animationName - The name of animation data. (If not set, The default animation will be played, or resume the animation playing from pause status, or replay the last playing animation)
         * @param playTimes - Playing repeat times. [-1: Use default value of the animation data, 0: No end loop playing, [1~N]: Repeat N times] (default: -1)
         * @returns The playing animation state.
         * @example
         * <pre>
         *     armature.animation.play("walk");
         * </pre>
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @param animationName - ????????????????????? ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
         * @param playTimes - ????????????????????? [-1: ???????????????????????????, 0: ??????????????????, [1~N]: ???????????? N ???] ?????????: -1???
         * @returns ????????????????????????
         * @example
         * <pre>
         *     armature.animation.play("walk");
         * </pre>
         * @version DragonBones 3.0
         * @language zh_CN
         */
        play(animationName?: string | null, playTimes?: number): AnimationState | null;
        /**
         * - Fade in a specific animation.
         * @param animationName - The name of animation data.
         * @param fadeInTime - The fade in time. [-1: Use the default value of animation data, [0~N]: The fade in time (In seconds)] (Default: -1)
         * @param playTimes - playing repeat times. [-1: Use the default value of animation data, 0: No end loop playing, [1~N]: Repeat N times] (Default: -1)
         * @param layer - The blending layer, the animation states in high level layer will get the blending weights with high priority, when the total blending weights are more than 1.0, there will be no more weights can be allocated to the other animation states. (Default: 0)
         * @param group - The blending group name, it is typically used to specify the substitution of multiple animation states blending. (Default: null)
         * @param fadeOutMode - The fade out mode, which is typically used to specify alternate mode of multiple animation states blending. (Default: AnimationFadeOutMode.SameLayerAndGroup)
         * @returns The playing animation state.
         * @example
         * <pre>
         *     armature.animation.fadeIn("walk", 0.3, 0, 0, "normalGroup").resetToPose = false;
         *     armature.animation.fadeIn("attack", 0.3, 1, 0, "attackGroup").resetToPose = false;
         * </pre>
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @param animationName - ?????????????????????
         * @param fadeInTime - ??????????????? [-1: ???????????????????????????, [0~N]: ???????????? (???????????????)] ?????????: -1???
         * @param playTimes - ??????????????? [-1: ???????????????????????????, 0: ??????????????????, [1~N]: ???????????? N ???] ?????????: -1???
         * @param layer - ?????????????????????????????????????????????????????????????????????????????????????????????????????? 1.0 ???????????????????????????????????????????????????????????? ?????????: 0???
         * @param group - ???????????????????????????????????????????????????????????????????????????????????????????????? ?????????: null???
         * @param fadeOutMode - ????????????????????????????????????????????????????????????????????????????????????????????? ?????????: AnimationFadeOutMode.SameLayerAndGroup???
         * @returns ????????????????????????
         * @example
         * <pre>
         *     armature.animation.fadeIn("walk", 0.3, 0, 0, "normalGroup").resetToPose = false;
         *     armature.animation.fadeIn("attack", 0.3, 1, 0, "attackGroup").resetToPose = false;
         * </pre>
         * @version DragonBones 4.5
         * @language zh_CN
         */
        fadeIn(animationName: string, fadeInTime?: number, playTimes?: number, layer?: number, group?: string | null, fadeOutMode?: AnimationFadeOutMode): AnimationState | null;
        /**
         * - Play a specific animation from the specific time.
         * @param animationName - The name of animation data.
         * @param time - The start time point of playing. (In seconds)
         * @param playTimes - Playing repeat times. [-1: Use the default value of animation data, 0: No end loop playing, [1~N]: Repeat N times] (Default: -1)
         * @returns The played animation state.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????????
         * @param animationName - ?????????????????????
         * @param time - ???????????????????????? (???????????????)
         * @param playTimes - ????????????????????? [-1: ???????????????????????????, 0: ??????????????????, [1~N]: ???????????? N ???] ?????????: -1???
         * @returns ????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        gotoAndPlayByTime(animationName: string, time?: number, playTimes?: number): AnimationState | null;
        /**
         * - Play a specific animation from the specific frame.
         * @param animationName - The name of animation data.
         * @param frame - The start frame of playing.
         * @param playTimes - Playing repeat times. [-1: Use the default value of animation data, 0: No end loop playing, [1~N]: Repeat N times] (Default: -1)
         * @returns The played animation state.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????
         * @param animationName - ?????????????????????
         * @param frame - ????????????????????????
         * @param playTimes - ??????????????? [-1: ???????????????????????????, 0: ??????????????????, [1~N]: ???????????? N ???] ?????????: -1???
         * @returns ????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        gotoAndPlayByFrame(animationName: string, frame?: number, playTimes?: number): AnimationState | null;
        /**
         * - Play a specific animation from the specific progress.
         * @param animationName - The name of animation data.
         * @param progress - The start progress value of playing.
         * @param playTimes - Playing repeat times. [-1: Use the default value of animation data, 0: No end loop playing, [1~N]: Repeat N times] (Default: -1)
         * @returns The played animation state.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????????
         * @param animationName - ?????????????????????
         * @param progress - ????????????????????????
         * @param playTimes - ??????????????? [-1: ???????????????????????????, 0: ??????????????????, [1~N]: ???????????? N ???] ?????????: -1???
         * @returns ????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        gotoAndPlayByProgress(animationName: string, progress?: number, playTimes?: number): AnimationState | null;
        /**
         * - Stop a specific animation at the specific time.
         * @param animationName - The name of animation data.
         * @param time - The stop time. (In seconds)
         * @returns The played animation state.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????
         * @param animationName - ?????????????????????
         * @param time - ?????????????????? (???????????????)
         * @returns ????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        gotoAndStopByTime(animationName: string, time?: number): AnimationState | null;
        /**
         * - Stop a specific animation at the specific frame.
         * @param animationName - The name of animation data.
         * @param frame - The stop frame.
         * @returns The played animation state.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????
         * @param animationName - ?????????????????????
         * @param frame - ??????????????????
         * @returns ????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        gotoAndStopByFrame(animationName: string, frame?: number): AnimationState | null;
        /**
         * - Stop a specific animation at the specific progress.
         * @param animationName - The name of animation data.
         * @param progress - The stop progress value.
         * @returns The played animation state.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ????????????????????????????????????????????????
         * @param animationName - ?????????????????????
         * @param progress - ???????????????
         * @returns ????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        gotoAndStopByProgress(animationName: string, progress?: number): AnimationState | null;
        /**
         * - Get a specific animation state.
         * @param animationName - The name of animation state.
         * @param layer - The layer of find animation states. [-1: Find all layers, [0~N]: Specified layer] (default: -1)
         * @example
         * <pre>
         *     armature.animation.play("walk");
         *     let walkState = armature.animation.getState("walk");
         *     walkState.timeScale = 0.5;
         * </pre>
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @param animationName - ?????????????????????
         * @param layer - ?????????????????????????????? [-1: ??????????????????, [0~N]: ????????????] ?????????: -1???
         * @example
         * <pre>
         *     armature.animation.play("walk");
         *     let walkState = armature.animation.getState("walk");
         *     walkState.timeScale = 0.5;
         * </pre>
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getState(animationName: string, layer?: number): AnimationState | null;
        /**
         * - Check whether a specific animation data is included.
         * @param animationName - The name of animation data.
         * @see dragonBones.AnimationData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????
         * @param animationName - ?????????????????????
         * @see dragonBones.AnimationData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        hasAnimation(animationName: string): boolean;
        /**
         * - Get all the animation states.
         * @version DragonBones 5.1
         * @language en_US
         */
        /**
         * - ???????????????????????????
         * @version DragonBones 5.1
         * @language zh_CN
         */
        getStates(): readonly AnimationState[];
        /**
         * - Check whether there is an animation state is playing
         * @see dragonBones.AnimationState
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????
         * @see dragonBones.AnimationState
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly isPlaying: boolean;
        /**
         * - Check whether all the animation states' playing were finished.
         * @see dragonBones.AnimationState
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????????????????
         * @see dragonBones.AnimationState
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly isCompleted: boolean;
        /**
         * - The name of the last playing animation state.
         * @see #lastAnimationState
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ????????????????????????????????????
         * @see #lastAnimationState
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly lastAnimationName: string;
        /**
         * - The name of all animation data
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        readonly animationNames: readonly string[];
        /**
         * - All animation data.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        animations: Map<AnimationData>;
        /**
         * - An AnimationConfig instance that can be used quickly.
         * @see dragonBones.AnimationConfig
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ????????????????????????????????????????????????
         * @see dragonBones.AnimationConfig
         * @version DragonBones 5.0
         * @language zh_CN
         */
        readonly animationConfig: AnimationConfig;
        /**
         * - The last playing animation state
         * @see dragonBones.AnimationState
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @see dragonBones.AnimationState
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly lastAnimationState: AnimationState | null;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The animation state is generated when the animation data is played.
     * @see dragonBones.Animation
     * @see dragonBones.AnimationData
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ?????????????????????????????????????????????
     * @see dragonBones.Animation
     * @see dragonBones.AnimationData
     * @version DragonBones 3.0
     * @language zh_CN
     */
    class AnimationState extends BaseObject {
        static toString(): string;
        /**
         * @private
         */
        actionEnabled: boolean;
        /**
         * @private
         */
        additive: boolean;
        /**
         * - Whether the animation state has control over the display object properties of the slots.
         * Sometimes blend a animation state does not want it to control the display object properties of the slots,
         * especially if other animation state are controlling the display object properties of the slots.
         * @default true
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????????????????????????????
         * ?????????????????????????????????????????????????????????????????????????????????
         * ??????????????????????????????????????????????????????????????????????????????
         * @default true
         * @version DragonBones 5.0
         * @language zh_CN
         */
        displayControl: boolean;
        /**
         * - Whether to reset the objects without animation to the armature pose when the animation state is start to play.
         * This property should usually be set to false when blend multiple animation states.
         * @default true
         * @version DragonBones 5.1
         * @language en_US
         */
        /**
         * - ????????????????????????????????????????????????????????????????????????????????????
         * ??????????????????????????????????????????????????????????????? false???
         * @default true
         * @version DragonBones 5.1
         * @language zh_CN
         */
        resetToPose: boolean;
        /**
         * @private
         */
        blendType: AnimationBlendType;
        /**
         * - The play times. [0: Loop play, [1~N]: Play N times]
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????? [0: ??????????????????, [1~N]: ???????????? N ???]
         * @version DragonBones 3.0
         * @language zh_CN
         */
        playTimes: number;
        /**
         * - The blend layer.
         * High layer animation state will get the blend weight first.
         * When the blend weight is assigned more than 1, the remaining animation states will no longer get the weight assigned.
         * @readonly
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????
         * ??????????????????????????????????????????????????????
         * ??????????????????????????? 1 ?????????????????????????????????????????????????????????
         * @readonly
         * @version DragonBones 5.0
         * @language zh_CN
         */
        layer: number;
        /**
         * - The play speed.
         * The value is an overlay relationship with {@link dragonBones.Animation#timeScale}.
         * [(-N~0): Reverse play, 0: Stop play, (0~1): Slow play, 1: Normal play, (1~N): Fast play]
         * @default 1.0
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * ????????? {@link dragonBones.Animation#timeScale} ??????????????????
         * [(-N~0): ????????????, 0: ????????????, (0~1): ????????????, 1: ????????????, (1~N): ????????????]
         * @default 1.0
         * @version DragonBones 3.0
         * @language zh_CN
         */
        timeScale: number;
        /**
         * @private
         */
        parameterX: number;
        /**
         * @private
         */
        parameterY: number;
        /**
         * @private
         */
        positionX: number;
        /**
         * @private
         */
        positionY: number;
        /**
         * - The auto fade out time when the animation state play completed.
         * [-1: Do not fade out automatically, [0~N]: The fade out time] (In seconds)
         * @default -1.0
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????????????????
         * [-1: ???????????????, [0~N]: ????????????] ?????????????????????
         * @default -1.0
         * @version DragonBones 5.0
         * @language zh_CN
         */
        autoFadeOutTime: number;
        /**
         * @private
         */
        fadeTotalTime: number;
        /**
         * - The name of the animation state. (Can be different from the name of the animation data)
         * @readonly
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ????????????????????? ?????????????????????????????????
         * @readonly
         * @version DragonBones 5.0
         * @language zh_CN
         */
        name: string;
        /**
         * - The blend group name of the animation state.
         * This property is typically used to specify the substitution of multiple animation states blend.
         * @readonly
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ??????????????????
         * ??????????????????????????????????????????????????????????????????????????????
         * @readonly
         * @version DragonBones 5.0
         * @language zh_CN
         */
        group: string;
        private _timelineDirty;
        private _weight;
        private _fadeTime;
        private _time;
        private readonly _boneMask;
        private readonly _boneTimelines;
        private readonly _boneBlendTimelines;
        private readonly _slotTimelines;
        private readonly _slotBlendTimelines;
        private readonly _constraintTimelines;
        private readonly _animationTimelines;
        private readonly _poseTimelines;
        private _animationData;
        private _armature;
        private _zOrderTimeline;
        private _activeChildA;
        private _activeChildB;
        protected _onClear(): void;
        private _updateTimelines;
        private _updateBoneAndSlotTimelines;
        private _advanceFadeTime;
        /**
         * - Continue play.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        play(): void;
        /**
         * - Stop play.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        stop(): void;
        /**
         * - Fade out the animation state.
         * @param fadeOutTime - The fade out time. (In seconds)
         * @param pausePlayhead - Whether to pause the animation playing when fade out.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @param fadeOutTime - ??????????????? ?????????????????????
         * @param pausePlayhead - ??????????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        fadeOut(fadeOutTime: number, pausePlayhead?: boolean): void;
        /**
         * - Check if a specific bone mask is included.
         * @param boneName - The bone name.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????
         * @param boneName - ???????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        containsBoneMask(boneName: string): boolean;
        /**
         * - Add a specific bone mask.
         * @param boneName - The bone name.
         * @param recursive - Whether or not to add a mask to the bone's sub-bone.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @param boneName - ???????????????
         * @param recursive - ?????????????????????????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        addBoneMask(boneName: string, recursive?: boolean): void;
        /**
         * - Remove the mask of a specific bone.
         * @param boneName - The bone name.
         * @param recursive - Whether to remove the bone's sub-bone mask.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @param boneName - ???????????????
         * @param recursive - ??????????????????????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        removeBoneMask(boneName: string, recursive?: boolean): void;
        /**
         * - Remove all bone masks.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        removeAllBoneMask(): void;
        /**
         * @private
         */
        addState(animationState: AnimationState, timelineDatas?: TimelineData[] | null): void;
        /**
         * - Whether the animation state is fading in.
         * @version DragonBones 5.1
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 5.1
         * @language zh_CN
         */
        readonly isFadeIn: boolean;
        /**
         * - Whether the animation state is fading out.
         * @version DragonBones 5.1
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 5.1
         * @language zh_CN
         */
        readonly isFadeOut: boolean;
        /**
         * - Whether the animation state is fade completed.
         * @version DragonBones 5.1
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @version DragonBones 5.1
         * @language zh_CN
         */
        readonly isFadeComplete: boolean;
        /**
         * - Whether the animation state is playing.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly isPlaying: boolean;
        /**
         * - Whether the animation state is play completed.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly isCompleted: boolean;
        /**
         * - The times has been played.
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly currentPlayTimes: number;
        /**
         * - The total time. (In seconds)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????????????????? ?????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly totalTime: number;
        /**
         * - The time is currently playing. (In seconds)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ???????????????????????? ?????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        currentTime: number;
        /**
         * - The blend weight.
         * @default 1.0
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ???????????????
         * @default 1.0
         * @version DragonBones 5.0
         * @language zh_CN
         */
        /**
         * - The animation data.
         * @see dragonBones.AnimationData
         * @version DragonBones 3.0
         * @language en_US
         */
        weight: number;
        /**
         * - ???????????????
         * @see dragonBones.AnimationData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        readonly animationData: AnimationData;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - The properties of the object carry basic information about an event,
     * which are passed as parameter or parameter's parameter to event listeners when an event occurs.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
     * @version DragonBones 4.5
     * @language zh_CN
     */
    class EventObject extends BaseObject {
        /**
         * - Animation start play.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        static readonly START: string;
        /**
         * - Animation loop play complete once.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        static readonly LOOP_COMPLETE: string;
        /**
         * - Animation play complete.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        static readonly COMPLETE: string;
        /**
         * - Animation fade in start.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        static readonly FADE_IN: string;
        /**
         * - Animation fade in complete.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        static readonly FADE_IN_COMPLETE: string;
        /**
         * - Animation fade out start.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        static readonly FADE_OUT: string;
        /**
         * - Animation fade out complete.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        static readonly FADE_OUT_COMPLETE: string;
        /**
         * - Animation frame event.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ??????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        static readonly FRAME_EVENT: string;
        /**
         * - Animation frame sound event.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        static readonly SOUND_EVENT: string;
        static toString(): string;
        /**
         * - If is a frame event, the value is used to describe the time that the event was in the animation timeline. (In seconds)
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ????????????????????????????????????????????????????????????????????????????????????????????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        time: number;
        /**
         * - The event type???
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        type: EventStringType;
        /**
         * - The event name. (The frame event name or the frame sound name)
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ??????????????? (???????????????????????????????????????)
         * @version DragonBones 4.5
         * @language zh_CN
         */
        name: string;
        /**
         * - The armature that dispatch the event.
         * @see dragonBones.Armature
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????
         * @see dragonBones.Armature
         * @version DragonBones 4.5
         * @language zh_CN
         */
        armature: Armature;
        /**
         * - The bone that dispatch the event.
         * @see dragonBones.Bone
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????
         * @see dragonBones.Bone
         * @version DragonBones 4.5
         * @language zh_CN
         */
        bone: Bone | null;
        /**
         * - The slot that dispatch the event.
         * @see dragonBones.Slot
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????
         * @see dragonBones.Slot
         * @version DragonBones 4.5
         * @language zh_CN
         */
        slot: Slot | null;
        /**
         * - The animation state that dispatch the event.
         * @see dragonBones.AnimationState
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ?????????????????????????????????
         * @see dragonBones.AnimationState
         * @version DragonBones 4.5
         * @language zh_CN
         */
        animationState: AnimationState;
        /**
         * @private
         */
        actionData: ActionData | null;
        /**
         * @private
         */
        /**
         * - The custom data.
         * @see dragonBones.CustomData
         * @version DragonBones 5.0
         * @language en_US
         */
        /**
         * - ??????????????????
         * @see dragonBones.CustomData
         * @version DragonBones 5.0
         * @language zh_CN
         */
        data: UserData | null;
        protected _onClear(): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * @private
     */
    type EventStringType = string | "start" | "loopComplete" | "complete" | "fadeIn" | "fadeInComplete" | "fadeOut" | "fadeOutComplete" | "frameEvent" | "soundEvent";
    /**
     * - The event dispatcher interface.
     * Dragonbones event dispatch usually relies on docking engine to implement, which defines the event method to be implemented when docking the engine.
     * @version DragonBones 4.5
     * @language en_US
     */
    /**
     * - ?????????????????????
     * DragonBones ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
     * @version DragonBones 4.5
     * @language zh_CN
     */
    interface IEventDispatcher {
        /**
         * - Checks whether the object has any listeners registered for a specific type of event???
         * @param type - Event type.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????????????????????????????
         * @param type - ???????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        hasDBEventListener(type: EventStringType): boolean;
        /**
         * - Dispatches an event into the event flow.
         * @param type - Event type.
         * @param eventObject - Event object.
         * @see dragonBones.EventObject
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????
         * @param type - ???????????????
         * @param eventObject - ???????????????
         * @see dragonBones.EventObject
         * @version DragonBones 4.5
         * @language zh_CN
         */
        dispatchDBEvent(type: EventStringType, eventObject: EventObject): void;
        /**
         * - Add an event listener object so that the listener receives notification of an event.
         * @param type - Event type.
         * @param listener - Event listener.
         * @param thisObject - The listener function's "this".
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????????????????????????????????????????????????????
         * @param type - ???????????????
         * @param listener - ??????????????????
         * @param thisObject - ????????????????????? this ?????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        addDBEventListener(type: EventStringType, listener: Function, thisObject: any): void;
        /**
         * - Removes a listener from the object.
         * @param type - Event type.
         * @param listener - Event listener.
         * @param thisObject - The listener function's "this".
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????????????????????
         * @param type - ???????????????
         * @param listener - ??????????????????
         * @param thisObject - ????????????????????? this ?????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        removeDBEventListener(type: EventStringType, listener: Function, thisObject: any): void;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * @private
     */
    abstract class DataParser {
        protected static readonly DATA_VERSION_2_3: string;
        protected static readonly DATA_VERSION_3_0: string;
        protected static readonly DATA_VERSION_4_0: string;
        protected static readonly DATA_VERSION_4_5: string;
        protected static readonly DATA_VERSION_5_0: string;
        protected static readonly DATA_VERSION_5_5: string;
        protected static readonly DATA_VERSION_5_6: string;
        protected static readonly DATA_VERSION: string;
        protected static readonly DATA_VERSIONS: string[];
        protected static readonly TEXTURE_ATLAS: string;
        protected static readonly SUB_TEXTURE: string;
        protected static readonly FORMAT: string;
        protected static readonly IMAGE_PATH: string;
        protected static readonly WIDTH: string;
        protected static readonly HEIGHT: string;
        protected static readonly ROTATED: string;
        protected static readonly FRAME_X: string;
        protected static readonly FRAME_Y: string;
        protected static readonly FRAME_WIDTH: string;
        protected static readonly FRAME_HEIGHT: string;
        protected static readonly DRADON_BONES: string;
        protected static readonly USER_DATA: string;
        protected static readonly ARMATURE: string;
        protected static readonly CANVAS: string;
        protected static readonly BONE: string;
        protected static readonly SURFACE: string;
        protected static readonly SLOT: string;
        protected static readonly CONSTRAINT: string;
        protected static readonly SKIN: string;
        protected static readonly DISPLAY: string;
        protected static readonly FRAME: string;
        protected static readonly IK: string;
        protected static readonly PATH_CONSTRAINT: string;
        protected static readonly ANIMATION: string;
        protected static readonly TIMELINE: string;
        protected static readonly FFD: string;
        protected static readonly TRANSLATE_FRAME: string;
        protected static readonly ROTATE_FRAME: string;
        protected static readonly SCALE_FRAME: string;
        protected static readonly DISPLAY_FRAME: string;
        protected static readonly COLOR_FRAME: string;
        protected static readonly DEFAULT_ACTIONS: string;
        protected static readonly ACTIONS: string;
        protected static readonly EVENTS: string;
        protected static readonly INTS: string;
        protected static readonly FLOATS: string;
        protected static readonly STRINGS: string;
        protected static readonly TRANSFORM: string;
        protected static readonly PIVOT: string;
        protected static readonly AABB: string;
        protected static readonly COLOR: string;
        protected static readonly VERSION: string;
        protected static readonly COMPATIBLE_VERSION: string;
        protected static readonly FRAME_RATE: string;
        protected static readonly TYPE: string;
        protected static readonly SUB_TYPE: string;
        protected static readonly NAME: string;
        protected static readonly PARENT: string;
        protected static readonly TARGET: string;
        protected static readonly STAGE: string;
        protected static readonly SHARE: string;
        protected static readonly PATH: string;
        protected static readonly LENGTH: string;
        protected static readonly DISPLAY_INDEX: string;
        protected static readonly Z_ORDER: string;
        protected static readonly Z_INDEX: string;
        protected static readonly BLEND_MODE: string;
        protected static readonly INHERIT_TRANSLATION: string;
        protected static readonly INHERIT_ROTATION: string;
        protected static readonly INHERIT_SCALE: string;
        protected static readonly INHERIT_REFLECTION: string;
        protected static readonly INHERIT_ANIMATION: string;
        protected static readonly INHERIT_DEFORM: string;
        protected static readonly SEGMENT_X: string;
        protected static readonly SEGMENT_Y: string;
        protected static readonly BEND_POSITIVE: string;
        protected static readonly CHAIN: string;
        protected static readonly WEIGHT: string;
        protected static readonly BLEND_TYPE: string;
        protected static readonly FADE_IN_TIME: string;
        protected static readonly PLAY_TIMES: string;
        protected static readonly SCALE: string;
        protected static readonly OFFSET: string;
        protected static readonly POSITION: string;
        protected static readonly DURATION: string;
        protected static readonly TWEEN_EASING: string;
        protected static readonly TWEEN_ROTATE: string;
        protected static readonly TWEEN_SCALE: string;
        protected static readonly CLOCK_WISE: string;
        protected static readonly CURVE: string;
        protected static readonly SOUND: string;
        protected static readonly EVENT: string;
        protected static readonly ACTION: string;
        protected static readonly X: string;
        protected static readonly Y: string;
        protected static readonly SKEW_X: string;
        protected static readonly SKEW_Y: string;
        protected static readonly SCALE_X: string;
        protected static readonly SCALE_Y: string;
        protected static readonly VALUE: string;
        protected static readonly ROTATE: string;
        protected static readonly SKEW: string;
        protected static readonly ALPHA: string;
        protected static readonly ALPHA_OFFSET: string;
        protected static readonly RED_OFFSET: string;
        protected static readonly GREEN_OFFSET: string;
        protected static readonly BLUE_OFFSET: string;
        protected static readonly ALPHA_MULTIPLIER: string;
        protected static readonly RED_MULTIPLIER: string;
        protected static readonly GREEN_MULTIPLIER: string;
        protected static readonly BLUE_MULTIPLIER: string;
        protected static readonly UVS: string;
        protected static readonly VERTICES: string;
        protected static readonly TRIANGLES: string;
        protected static readonly WEIGHTS: string;
        protected static readonly SLOT_POSE: string;
        protected static readonly BONE_POSE: string;
        protected static readonly BONES: string;
        protected static readonly POSITION_MODE: string;
        protected static readonly SPACING_MODE: string;
        protected static readonly ROTATE_MODE: string;
        protected static readonly SPACING: string;
        protected static readonly ROTATE_OFFSET: string;
        protected static readonly ROTATE_MIX: string;
        protected static readonly TRANSLATE_MIX: string;
        protected static readonly TARGET_DISPLAY: string;
        protected static readonly CLOSED: string;
        protected static readonly CONSTANT_SPEED: string;
        protected static readonly VERTEX_COUNT: string;
        protected static readonly LENGTHS: string;
        protected static readonly GOTO_AND_PLAY: string;
        protected static readonly DEFAULT_NAME: string;
        protected static _getArmatureType(value: string): ArmatureType;
        protected static _getBoneType(value: string): BoneType;
        protected static _getPositionMode(value: string): PositionMode;
        protected static _getSpacingMode(value: string): SpacingMode;
        protected static _getRotateMode(value: string): RotateMode;
        protected static _getDisplayType(value: string): DisplayType;
        protected static _getBoundingBoxType(value: string): BoundingBoxType;
        protected static _getBlendMode(value: string): BlendMode;
        protected static _getAnimationBlendType(value: string): AnimationBlendType;
        protected static _getActionType(value: string): ActionType;
        abstract parseDragonBonesData(rawData: any, scale: number): DragonBonesData | null;
        abstract parseTextureAtlasData(rawData: any, textureAtlasData: TextureAtlasData, scale: number): boolean;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * @private
     */
    const enum FrameValueType {
        Step = 0,
        Int = 1,
        Float = 2
    }
    /**
     * @private
     */
    class ObjectDataParser extends DataParser {
        protected static _getBoolean(rawData: any, key: string, defaultValue: boolean): boolean;
        protected static _getNumber(rawData: any, key: string, defaultValue: number): number;
        protected static _getString(rawData: any, key: string, defaultValue: string): string;
        protected _rawTextureAtlasIndex: number;
        protected readonly _rawBones: BoneData[];
        protected _data: DragonBonesData;
        protected _armature: ArmatureData;
        protected _bone: BoneData;
        protected _geometry: GeometryData;
        protected _slot: SlotData;
        protected _skin: SkinData;
        protected _mesh: MeshDisplayData;
        protected _animation: AnimationData;
        protected _timeline: TimelineData;
        protected _rawTextureAtlases: any[] | null;
        private _frameValueType;
        private _defaultColorOffset;
        private _prevClockwise;
        private _prevRotation;
        private _frameDefaultValue;
        private _frameValueScale;
        private readonly _helpMatrixA;
        private readonly _helpMatrixB;
        private readonly _helpTransform;
        private readonly _helpColorTransform;
        private readonly _helpPoint;
        private readonly _helpArray;
        private readonly _intArray;
        private readonly _floatArray;
        private readonly _frameIntArray;
        private readonly _frameFloatArray;
        private readonly _frameArray;
        private readonly _timelineArray;
        private readonly _colorArray;
        private readonly _cacheRawMeshes;
        private readonly _cacheMeshes;
        private readonly _actionFrames;
        private readonly _weightSlotPose;
        private readonly _weightBonePoses;
        private readonly _cacheBones;
        private readonly _slotChildActions;
        private _getCurvePoint;
        private _samplingEasingCurve;
        private _parseActionDataInFrame;
        private _mergeActionFrame;
        protected _parseArmature(rawData: any, scale: number): ArmatureData;
        protected _parseBone(rawData: any): BoneData;
        protected _parseIKConstraint(rawData: any): ConstraintData | null;
        protected _parsePathConstraint(rawData: any): ConstraintData | null;
        protected _parseSlot(rawData: any, zOrder: number): SlotData;
        protected _parseSkin(rawData: any): SkinData;
        protected _parseDisplay(rawData: any): DisplayData | null;
        protected _parsePath(rawData: any, display: PathDisplayData): void;
        protected _parsePivot(rawData: any, display: ImageDisplayData): void;
        protected _parseMesh(rawData: any, mesh: MeshDisplayData): void;
        protected _parseBoundingBox(rawData: any): BoundingBoxData | null;
        protected _parsePolygonBoundingBox(rawData: any): PolygonBoundingBoxData;
        protected _parseAnimation(rawData: any): AnimationData;
        protected _parseTimeline(rawData: any, rawFrames: any[] | null, framesKey: string, timelineType: TimelineType, frameValueType: FrameValueType, frameValueCount: number, frameParser: (rawData: any, frameStart: number, frameCount: number) => number, timeline?: TimelineData | null): TimelineData | null;
        protected _parseBoneTimeline(rawData: any): void;
        protected _parseSlotTimeline(rawData: any): void;
        protected _parseFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseTweenFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseSingleValueFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseDoubleValueFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseActionFrame(frame: ActionFrame, frameStart: number, frameCount: number): number;
        protected _parseZOrderFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseBoneAllFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseBoneTranslateFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseBoneRotateFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseBoneScaleFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseSlotDisplayFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseSlotColorFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseSlotDeformFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseIKConstraintFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseActionData(rawData: any, type: ActionType, bone: BoneData | null, slot: SlotData | null): ActionData[];
        protected _parseDeformFrame(rawData: any, frameStart: number, frameCount: number): number;
        protected _parseTransform(rawData: any, transform: Transform, scale: number): void;
        protected _parseColorTransform(rawData: any, color: ColorTransform): void;
        protected _parseGeometry(rawData: any, geometry: GeometryData): void;
        protected _parseArray(rawData: any): void;
        protected _modifyArray(): void;
        parseDragonBonesData(rawData: any, scale?: number): DragonBonesData | null;
        parseTextureAtlasData(rawData: any, textureAtlasData: TextureAtlasData, scale?: number): boolean;
        private static _objectDataParserInstance;
        /**
         * - Deprecated, please refer to {@link dragonBones.BaseFactory#parseDragonBonesData()}.
         * @deprecated
         * @language en_US
         */
        /**
         * - ????????????????????? {@link dragonBones.BaseFactory#parseDragonBonesData()}???
         * @deprecated
         * @language zh_CN
         */
        static getInstance(): ObjectDataParser;
    }
    /**
     * @private
     */
    class ActionFrame {
        frameStart: number;
        readonly actions: number[];
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * @private
     */
    class BinaryDataParser extends ObjectDataParser {
        private _binaryOffset;
        private _binary;
        private _intArrayBuffer;
        private _frameArrayBuffer;
        private _timelineArrayBuffer;
        private _inRange;
        private _decodeUTF8;
        private _parseBinaryTimeline;
        protected _parseAnimation(rawData: any): AnimationData;
        protected _parseGeometry(rawData: any, geometry: GeometryData): void;
        protected _parseArray(rawData: any): void;
        parseDragonBonesData(rawData: any, scale?: number): DragonBonesData | null;
        private static _binaryDataParserInstance;
        /**
         * - Deprecated, please refer to {@link dragonBones.BaseFactory#parseDragonBonesData()}.
         * @deprecated
         * @language en_US
         */
        /**
         * - ????????????????????? {@link dragonBones.BaseFactory#parseDragonBonesData()}???
         * @deprecated
         * @language zh_CN
         */
        static getInstance(): BinaryDataParser;
    }
}
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2012-2018 DragonBones team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
declare namespace dragonBones {
    /**
     * - Base class for the factory that create the armatures. (Typically only one global factory instance is required)
     * The factory instance create armatures by parsed and added DragonBonesData instances and TextureAtlasData instances.
     * Once the data has been parsed, it has been cached in the factory instance and does not need to be parsed again until it is cleared by the factory instance.
     * @see dragonBones.DragonBonesData
     * @see dragonBones.TextureAtlasData
     * @see dragonBones.ArmatureData
     * @see dragonBones.Armature
     * @version DragonBones 3.0
     * @language en_US
     */
    /**
     * - ?????????????????????????????? ?????????????????????????????????????????????
     * ?????????????????????????????? DragonBonesData ????????? TextureAtlasData ????????????????????????
     * ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
     * @see dragonBones.DragonBonesData
     * @see dragonBones.TextureAtlasData
     * @see dragonBones.ArmatureData
     * @see dragonBones.Armature
     * @version DragonBones 3.0
     * @language zh_CN
     */
    abstract class BaseFactory {
        protected static _objectParser: ObjectDataParser;
        protected static _binaryParser: BinaryDataParser;
        /**
         * @private
         */
        autoSearch: boolean;
        protected readonly _dragonBonesDataMap: Map<DragonBonesData>;
        protected readonly _textureAtlasDataMap: Map<TextureAtlasData[]>;
        protected _dragonBones: DragonBones;
        protected _dataParser: DataParser;
        /**
         * - Create a factory instance. (typically only one global factory instance is required)
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????????????????? ?????????????????????????????????????????????
         * @version DragonBones 3.0
         * @language zh_CN
         */
        constructor(dataParser?: DataParser | null);
        protected _isSupportMesh(): boolean;
        protected _getTextureData(textureAtlasName: string, textureName: string): TextureData | null;
        protected _fillBuildArmaturePackage(dataPackage: BuildArmaturePackage, dragonBonesName: string, armatureName: string, skinName: string, textureAtlasName: string): boolean;
        protected _buildBones(dataPackage: BuildArmaturePackage, armature: Armature): void;
        /**
         * @private
         */
        protected _buildSlots(dataPackage: BuildArmaturePackage, armature: Armature): void;
        protected _buildConstraints(dataPackage: BuildArmaturePackage, armature: Armature): void;
        protected _buildChildArmature(dataPackage: BuildArmaturePackage | null, _slot: Slot, displayData: ArmatureDisplayData): Armature | null;
        protected _getSlotDisplay(dataPackage: BuildArmaturePackage | null, displayData: DisplayData, slot: Slot): any;
        protected abstract _buildTextureAtlasData(textureAtlasData: TextureAtlasData | null, textureAtlas: any): TextureAtlasData;
        protected abstract _buildArmature(dataPackage: BuildArmaturePackage): Armature;
        protected abstract _buildSlot(dataPackage: BuildArmaturePackage, slotData: SlotData, armature: Armature): Slot;
        /**
         * - Parse the raw data to a DragonBonesData instance and cache it to the factory.
         * @param rawData - The raw data.
         * @param name - Specify a cache name for the instance so that the instance can be obtained through this name. (If not set, use the instance name instead)
         * @param scale - Specify a scaling value for all armatures. (Default: 1.0)
         * @returns DragonBonesData instance
         * @see #getDragonBonesData()
         * @see #addDragonBonesData()
         * @see #removeDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ???????????????????????? DragonBonesData ?????????????????????????????????
         * @param rawData - ???????????????
         * @param name - ???????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????
         * @param scale - ?????????????????????????????????????????? ?????????: 1.0???
         * @returns DragonBonesData ??????
         * @see #getDragonBonesData()
         * @see #addDragonBonesData()
         * @see #removeDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 4.5
         * @language zh_CN
         */
        parseDragonBonesData(rawData: any, name?: string | null, scale?: number): DragonBonesData | null;
        /**
         * - Parse the raw texture atlas data and the texture atlas object to a TextureAtlasData instance and cache it to the factory.
         * @param rawData - The raw texture atlas data.
         * @param textureAtlas - The texture atlas object.
         * @param name - Specify a cache name for the instance so that the instance can be obtained through this name. (If not set, use the instance name instead)
         * @param scale - Specify a scaling value for the map set. (Default: 1.0)
         * @returns TextureAtlasData instance
         * @see #getTextureAtlasData()
         * @see #addTextureAtlasData()
         * @see #removeTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????????????? TextureAtlasData ?????????????????????????????????
         * @param rawData - ????????????????????????
         * @param textureAtlas - ??????????????????
         * @param name - ???????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????
         * @param scale - ???????????????????????????????????? ?????????: 1.0???
         * @returns TextureAtlasData ??????
         * @see #getTextureAtlasData()
         * @see #addTextureAtlasData()
         * @see #removeTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 4.5
         * @language zh_CN
         */
        parseTextureAtlasData(rawData: any, textureAtlas: any, name?: string | null, scale?: number): TextureAtlasData;
        /**
         * - Update texture atlases.
         * @param textureAtlases - The texture atlas objects.
         * @param name - The texture atlas name.
         * @version DragonBones 5.7
         * @language en_US
         */
        /**
         * - ????????????????????????
         * @param textureAtlases - ????????????????????????
         * @param name - ??????????????????
         * @version DragonBones 5.7
         * @language zh_CN
         */
        updateTextureAtlases(textureAtlases: any[], name: string): void;
        /**
         * - Get a specific DragonBonesData instance.
         * @param name - The DragonBonesData instance cache name.
         * @returns DragonBonesData instance
         * @see #parseDragonBonesData()
         * @see #addDragonBonesData()
         * @see #removeDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????? DragonBonesData ?????????
         * @param name - DragonBonesData ????????????????????????
         * @returns DragonBonesData ??????
         * @see #parseDragonBonesData()
         * @see #addDragonBonesData()
         * @see #removeDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getDragonBonesData(name: string): DragonBonesData | null;
        /**
         * - Cache a DragonBonesData instance to the factory.
         * @param data - The DragonBonesData instance.
         * @param name - Specify a cache name for the instance so that the instance can be obtained through this name. (if not set, use the instance name instead)
         * @see #parseDragonBonesData()
         * @see #getDragonBonesData()
         * @see #removeDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??? DragonBonesData ???????????????????????????
         * @param data - DragonBonesData ?????????
         * @param name - ???????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????
         * @see #parseDragonBonesData()
         * @see #getDragonBonesData()
         * @see #removeDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        addDragonBonesData(data: DragonBonesData, name?: string | null): void;
        /**
         * - Remove a DragonBonesData instance.
         * @param name - The DragonBonesData instance cache name.
         * @param disposeData - Whether to dispose data. (Default: true)
         * @see #parseDragonBonesData()
         * @see #getDragonBonesData()
         * @see #addDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????? DragonBonesData ?????????
         * @param name - DragonBonesData ?????????????????????
         * @param disposeData - ????????????????????? ?????????: true???
         * @see #parseDragonBonesData()
         * @see #getDragonBonesData()
         * @see #addDragonBonesData()
         * @see dragonBones.DragonBonesData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        removeDragonBonesData(name: string, disposeData?: boolean): void;
        /**
         * - Get a list of specific TextureAtlasData instances.
         * @param name - The TextureAtlasData cahce name.
         * @see #parseTextureAtlasData()
         * @see #addTextureAtlasData()
         * @see #removeTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????? TextureAtlasData ???????????????
         * @param name - TextureAtlasData ?????????????????????
         * @see #parseTextureAtlasData()
         * @see #addTextureAtlasData()
         * @see #removeTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        getTextureAtlasData(name: string): TextureAtlasData[] | null;
        /**
         * - Cache a TextureAtlasData instance to the factory.
         * @param data - The TextureAtlasData instance.
         * @param name - Specify a cache name for the instance so that the instance can be obtained through this name. (if not set, use the instance name instead)
         * @see #parseTextureAtlasData()
         * @see #getTextureAtlasData()
         * @see #removeTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??? TextureAtlasData ???????????????????????????
         * @param data - TextureAtlasData ?????????
         * @param name - ???????????????????????????????????????????????????????????????????????????????????? ??????????????????????????????????????????????????????
         * @see #parseTextureAtlasData()
         * @see #getTextureAtlasData()
         * @see #removeTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        addTextureAtlasData(data: TextureAtlasData, name?: string | null): void;
        /**
         * - Remove a TextureAtlasData instance.
         * @param name - The TextureAtlasData instance cache name.
         * @param disposeData - Whether to dispose data.
         * @see #parseTextureAtlasData()
         * @see #getTextureAtlasData()
         * @see #addTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ?????? TextureAtlasData ?????????
         * @param name - TextureAtlasData ????????????????????????
         * @param disposeData - ?????????????????????
         * @see #parseTextureAtlasData()
         * @see #getTextureAtlasData()
         * @see #addTextureAtlasData()
         * @see dragonBones.TextureAtlasData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        removeTextureAtlasData(name: string, disposeData?: boolean): void;
        /**
         * - Get a specific armature data.
         * @param name - The armature data name.
         * @param dragonBonesName - The cached name for DragonbonesData instance.
         * @see dragonBones.ArmatureData
         * @version DragonBones 5.1
         * @language en_US
         */
        /**
         * - ??????????????????????????????
         * @param name - ?????????????????????
         * @param dragonBonesName - DragonBonesData ????????????????????????
         * @see dragonBones.ArmatureData
         * @version DragonBones 5.1
         * @language zh_CN
         */
        getArmatureData(name: string, dragonBonesName?: string): ArmatureData | null;
        /**
         * - Clear all cached DragonBonesData instances and TextureAtlasData instances.
         * @param disposeData - Whether to dispose data.
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ????????????????????? DragonBonesData ????????? TextureAtlasData ?????????
         * @param disposeData - ?????????????????????
         * @version DragonBones 4.5
         * @language zh_CN
         */
        clear(disposeData?: boolean): void;
        /**
         * - Create a armature from cached DragonBonesData instances and TextureAtlasData instances.
         * Note that when the created armature that is no longer in use, you need to explicitly dispose {@link #dragonBones.Armature#dispose()}.
         * @param armatureName - The armature data name.
         * @param dragonBonesName - The cached name of the DragonBonesData instance. (If not set, all DragonBonesData instances are retrieved, and when multiple DragonBonesData instances contain a the same name armature data, it may not be possible to accurately create a specific armature)
         * @param skinName - The skin name, you can set a different ArmatureData name to share it's skin data. (If not set, use the default skin data)
         * @returns The armature.
         * @example
         * <pre>
         *     let armature = factory.buildArmature("armatureName", "dragonBonesName");
         *     armature.clock = factory.clock;
         * </pre>
         * @see dragonBones.DragonBonesData
         * @see dragonBones.ArmatureData
         * @version DragonBones 3.0
         * @language en_US
         */
        /**
         * - ??????????????? DragonBonesData ????????? TextureAtlasData ???????????????????????????
         * ???????????????????????????????????????????????????????????? {@link #dragonBones.Armature#dispose()}???
         * @param armatureName - ?????????????????????
         * @param dragonBonesName - DragonBonesData ???????????????????????? ??????????????????????????????????????? DragonBonesData ?????????????????? DragonBonesData ??????????????????????????????????????????????????????????????????????????????????????????
         * @param skinName - ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
         * @returns ?????????
         * @example
         * <pre>
         *     let armature = factory.buildArmature("armatureName", "dragonBonesName");
         *     armature.clock = factory.clock;
         * </pre>
         * @see dragonBones.DragonBonesData
         * @see dragonBones.ArmatureData
         * @version DragonBones 3.0
         * @language zh_CN
         */
        buildArmature(armatureName: string, dragonBonesName?: string, skinName?: string, textureAtlasName?: string): Armature | null;
        /**
         * @private
         */
        replaceDisplay(slot: Slot, displayData: DisplayData | null, displayIndex?: number): void;
        /**
         * - Replaces the current display data for a particular slot with a specific display data.
         * Specify display data with "dragonBonesName/armatureName/slotName/displayName".
         * @param dragonBonesName - The DragonBonesData instance cache name.
         * @param armatureName - The armature data name.
         * @param slotName - The slot data name.
         * @param displayName - The display data name.
         * @param slot - The slot.
         * @param displayIndex - The index of the display data that is replaced. (If it is not set, replaces the current display data)
         * @example
         * <pre>
         *     let slot = armature.getSlot("weapon");
         *     factory.replaceSlotDisplay("dragonBonesName", "armatureName", "slotName", "displayName", slot);
         * </pre>
         * @version DragonBones 4.5
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????????????????????????????????????????
         * ??? "dragonBonesName/armatureName/slotName/displayName" ???????????????????????????
         * @param dragonBonesName - DragonBonesData ????????????????????????
         * @param armatureName - ?????????????????????
         * @param slotName - ?????????????????????
         * @param displayName - ???????????????????????????
         * @param slot - ?????????
         * @param displayIndex - ?????????????????????????????????????????? ????????????????????????????????????????????????????????????
         * @example
         * <pre>
         *     let slot = armature.getSlot("weapon");
         *     factory.replaceSlotDisplay("dragonBonesName", "armatureName", "slotName", "displayName", slot);
         * </pre>
         * @version DragonBones 4.5
         * @language zh_CN
         */
        replaceSlotDisplay(dragonBonesName: string, armatureName: string, slotName: string, displayName: string, slot: Slot, displayIndex?: number): boolean;
        /**
         * @private
         */
        replaceSlotDisplayList(dragonBonesName: string | null, armatureName: string, slotName: string, slot: Slot): boolean;
        /**
         * - Share specific skin data with specific armature.
         * @param armature - The armature.
         * @param skin - The skin data.
         * @param isOverride - Whether it completely override the original skin. (Default: false)
         * @param exclude - A list of slot names that do not need to be replace.
         * @example
         * <pre>
         *     let armatureA = factory.buildArmature("armatureA", "dragonBonesA");
         *     let armatureDataB = factory.getArmatureData("armatureB", "dragonBonesB");
         *     if (armatureDataB && armatureDataB.defaultSkin) {
         *     factory.replaceSkin(armatureA, armatureDataB.defaultSkin, false, ["arm_l", "weapon_l"]);
         *     }
         * </pre>
         * @see dragonBones.Armature
         * @see dragonBones.SkinData
         * @version DragonBones 5.6
         * @language en_US
         */
        /**
         * - ?????????????????????????????????????????????????????????
         * @param armature - ?????????
         * @param skin - ???????????????
         * @param isOverride - ???????????????????????????????????? ?????????: false???
         * @param exclude - ??????????????????????????????????????????
         * @example
         * <pre>
         *     let armatureA = factory.buildArmature("armatureA", "dragonBonesA");
         *     let armatureDataB = factory.getArmatureData("armatureB", "dragonBonesB");
         *     if (armatureDataB && armatureDataB.defaultSkin) {
         *     factory.replaceSkin(armatureA, armatureDataB.defaultSkin, false, ["arm_l", "weapon_l"]);
         *     }
         * </pre>
         * @see dragonBones.Armature
         * @see dragonBones.SkinData
         * @version DragonBones 5.6
         * @language zh_CN
         */
        replaceSkin(armature: Armature, skin: SkinData, isOverride?: boolean, exclude?: string[] | null): boolean;
        /**
         * - Replaces the existing animation data for a specific armature with the animation data for the specific armature data.
         * This enables you to make a armature template so that other armature without animations can share it's animations.
         * @param armature - The armtaure.
         * @param armatureData - The armature data.
         * @param isOverride - Whether to completely overwrite the original animation. (Default: false)
         * @example
         * <pre>
         *     let armatureA = factory.buildArmature("armatureA", "dragonBonesA");
         *     let armatureDataB = factory.getArmatureData("armatureB", "dragonBonesB");
         *     if (armatureDataB) {
         *     factory.replaceAnimation(armatureA, armatureDataB);
         *     }
         * </pre>
         * @see dragonBones.Armature
         * @see dragonBones.ArmatureData
         * @version DragonBones 5.6
         * @language en_US
         */
        /**
         * - ??????????????????????????????????????????????????????????????????????????????
         * ?????????????????????????????????????????????????????????????????????????????????????????????????????????
         * @param armature - ?????????
         * @param armatureData - ???????????????
         * @param isOverride - ?????????????????????????????????????????????: false???
         * @example
         * <pre>
         *     let armatureA = factory.buildArmature("armatureA", "dragonBonesA");
         *     let armatureDataB = factory.getArmatureData("armatureB", "dragonBonesB");
         *     if (armatureDataB) {
         *     factory.replaceAnimation(armatureA, armatureDataB);
         *     }
         * </pre>
         * @see dragonBones.Armature
         * @see dragonBones.ArmatureData
         * @version DragonBones 5.6
         * @language zh_CN
         */
        replaceAnimation(armature: Armature, armatureData: ArmatureData, isOverride?: boolean): boolean;
        /**
         * @private
         */
        getAllDragonBonesData(): Map<DragonBonesData>;
        /**
         * @private
         */
        getAllTextureAtlasData(): Map<TextureAtlasData[]>;
        /**
         * - An Worldclock instance updated by engine.
         * @version DragonBones 5.7
         * @language en_US
         */
        /**
         * - ?????????????????? WorldClock ?????????
         * @version DragonBones 5.7
         * @language zh_CN
         */
        readonly clock: WorldClock;
        /**
         * @private
         */
        readonly dragonBones: DragonBones;
    }
    /**
     * @private
     */
    class BuildArmaturePackage {
        dataName: string;
        textureAtlasName: string;
        data: DragonBonesData;
        armature: ArmatureData;
        skin: SkinData | null;
    }
}
declare namespace dragonBones.phaser.util {
    class EventDispatcher extends Phaser.Events.EventEmitter implements IEventDispatcher {
        hasDBEventListener(type: EventStringType): boolean;
        dispatchDBEvent(type: EventStringType, eventObject: EventObject): void;
        addDBEventListener(type: EventStringType, listener: (e: EventObject) => void, thisObject?: any): void;
        removeDBEventListener(type: EventStringType, listener: (e: EventObject) => void, thisObject?: any): void;
    }
}
declare namespace dragonBones.phaser.util {
    /**
     * Methods for handling "skew" or "shear", used in deformation.
     *
     * Necessary because default phaser pipeline doesn't respect it; they explicitly reconstruct transformation matrices.
     * This is worrisome;
     */
    const Skew: {
        getSkewX(): number;
        setSkewX(v: number): void;
        getSkewY(): number;
        setSkewY(v: number): void;
        setSkew(sx: number, sy?: number): void;
        getLocalTransformMatrix(tempMatrix: any): any;
        getWorldTransformMatrix(tempMatrix: any, parentMatrix: any): any;
    };
    const extendSkew: (clazz: any) => void;
}
declare namespace dragonBones.phaser.util {
    class TransformMatrix extends Phaser.GameObjects.Components.TransformMatrix {
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
        static applyITRSC(tempMatrix: Phaser.GameObjects.Components.TransformMatrix, x: number, y: number, rotation: number, scaleX: number, scaleY: number, skewX: number, skewY: number): Phaser.GameObjects.Components.TransformMatrix;
        skew(sx: number, sy: number): this;
    }
}
declare namespace dragonBones.phaser.display {
    class DisplayContainer extends Phaser.GameObjects.Container {
        private tempTransformMatrix;
        constructor(scene: Phaser.Scene, x?: number, y?: number, children?: Phaser.GameObjects.GameObject[]);
        pointToContainer(source: Phaser.Math.Vector2 | Phaser.Geom.Point | {
            x?: number;
            y?: number;
        }, output?: Phaser.Math.Vector2 | Phaser.Geom.Point | {
            x?: number;
            y?: number;
        }): Phaser.Math.Vector2 | Phaser.Geom.Point | {
            x?: number;
            y?: number;
        };
    }
}
declare namespace dragonBones.phaser.display {
    class ArmatureDisplay extends DisplayContainer implements IArmatureProxy {
        debugDraw: boolean;
        private _armature;
        constructor(scene: Phaser.Scene);
        dbInit(armature: Armature): void;
        dbClear(): void;
        dbUpdate(): void;
        dispose(disposeProxy: boolean): void;
        destroy(): void;
        dispatchDBEvent(type: EventStringType, eventObject: EventObject): void;
        hasDBEventListener(type: EventStringType): boolean;
        addDBEventListener(type: EventStringType, listener: (event: EventObject) => void, scope?: any): void;
        removeDBEventListener(type: EventStringType, listener: (event: EventObject) => void, scope?: any): void;
        readonly armature: Armature;
        readonly animation: Animation;
        getBounds(output?: Phaser.Geom.Rectangle): Phaser.Geom.Rectangle;
    }
}
declare namespace dragonBones.phaser.display {
    class SlotImage extends Phaser.GameObjects.Image {
        constructor(scene: Phaser.Scene, x: number, y: number, texture?: string, frame?: string | number);
        bind(key: string): void;
        loose(key: string): void;
        setTexture(key: string, frame?: string | number): this;
        destroy(fromScene?: boolean): void;
    }
}
declare namespace dragonBones.phaser.display {
    class SlotSprite extends Phaser.GameObjects.Sprite {
        constructor(scene: Phaser.Scene, x: number, y: number, texture?: string, frame?: string | number);
    }
}
declare namespace dragonBones.phaser.display {
    class SlotMesh extends Phaser.GameObjects.Mesh {
        fakeIndices: Uint16Array;
        fakeVertices: Uint16Array;
        fakeUvs: Uint16Array;
        constructor(scene: Phaser.Scene, x: number, y: number, vertices: number[], uv: number[], colors: number[], alphas: number[], texture: string, frame?: string | integer);
        setTint(topLeft?: integer, topRight?: integer, bottomLeft?: integer, bottomRight?: integer): void;
        updateVertices(): void;
    }
}
declare namespace dragonBones.phaser.display {
    class Slot extends dragonBones.Slot {
        static toString(): string;
        private _textureScale;
        private _renderDisplay;
        protected _onClear(): void;
        protected _initDisplay(rawDisplay: any, isRetain: boolean): void;
        protected _disposeDisplay(prevDisplay: any, isRelease: boolean): void;
        protected _onUpdateDisplay(): void;
        protected _addDisplay(): void;
        protected _replaceDisplay(prevDisplay: any): void;
        protected _removeDisplay(): void;
        protected _updateDisplayData(): void;
        protected _updateZOrder(): void;
        _updateVisible(): void;
        protected _updateBlendMode(): void;
        protected _updateColor(): void;
        protected _updateFrame(): void;
        protected _updateMesh(): void;
        protected _updateTransform(): void;
        protected _identityTransform(): void;
    }
}
declare namespace dragonBones.phaser.display {
    class TextureAtlasData extends dragonBones.TextureAtlasData {
        static toString(): string;
        private _renderTexture;
        protected _onClear(): void;
        createTexture(): TextureData;
        renderTexture: Phaser.Textures.Texture;
        releaseRenderTexture(): void;
    }
    class TextureData extends dragonBones.TextureData {
        static toString(): string;
        renderTexture: Phaser.Textures.Frame;
        protected _onClear(): void;
    }
}
declare namespace dragonBones.phaser.pipeline {
    class SkewPipeline extends Phaser.Renderer.WebGL.Pipelines.MultiPipeline {
        private _tempMatrix1;
        private _tempMatrix2;
        private _tempMatrix3;
        constructor(config: any);
        batchSprite(sprite: Phaser.GameObjects.Image | Phaser.GameObjects.Sprite, camera: Phaser.Cameras.Scene2D.Camera, parentTransformMatrix: Phaser.GameObjects.Components.TransformMatrix): void;
    }
}
declare namespace dragonBones.phaser.plugin {
    interface FileTypeClass {
        new (...args: any[]): Phaser.Loader.File;
    }
    const FileTypes: {
        IMAGE: string;
        JSON: string;
        BINARY: string;
        map: {
            imageFile: typeof Phaser.Loader.FileTypes.ImageFile;
            jsonFile: typeof Phaser.Loader.FileTypes.JSONFile;
            binaryFile: typeof Phaser.Loader.FileTypes.BinaryFile;
        };
        setType: (type: string, clazz: FileTypeClass) => void;
        getType: (type: string) => FileTypeClass;
    };
}
declare namespace dragonBones.phaser.plugin {
    class DragonBonesFile extends Phaser.Loader.MultiFile {
        constructor(loader: Phaser.Loader.LoaderPlugin, key: string | object, textureURL?: string, atlasURL?: string, boneURL?: string, textureXhrSettings?: any, // XHRSettingsObject,
        atlasXhrSettings?: any, // XHRSettingsObject,
        boneXhrSettings?: any);
        addToCache(): void;
    }
}
declare namespace dragonBones.phaser.plugin {
    class DragonBonesScenePlugin extends Phaser.Plugins.ScenePlugin {
        protected _dbInst: dragonBones.DragonBones;
        protected _factory: Factory;
        constructor(scene: Phaser.Scene, pluginManager: Phaser.Plugins.PluginManager);
        createArmature(armature: string, dragonBones?: string, skinName?: string, atlasTextureName?: string, textureScale?: number): display.ArmatureDisplay;
        createDragonBones(dragonBonesName: string, textureScale?: number): DragonBonesData;
        readonly factory: Factory;
        createSlotDisplayPlaceholder(): display.SlotImage | display.SlotSprite;
        boot(): void;
        start(): void;
        private update;
        shutdown(): void;
        destroy(): void;
        createMeshDisplayPlaceholder(): Phaser.GameObjects.Mesh;
    }
}
declare namespace dragonBones.phaser {
    class Factory extends BaseFactory {
        protected _scene: Phaser.Scene;
        protected _dragonBones: DragonBones;
        constructor(dragonBones: DragonBones, scene: Phaser.Scene, dataParser?: DataParser);
        protected _isSupportMesh(): boolean;
        protected _buildTextureAtlasData(textureAtlasData: display.TextureAtlasData, textureAtlas: Phaser.Textures.Texture): TextureAtlasData;
        protected _buildArmature(dataPackage: BuildArmaturePackage): Armature;
        protected _buildSlot(dataPackage: BuildArmaturePackage, slotData: SlotData, armature: Armature): Slot;
        buildArmatureDisplay(armatureName: string, dragonBonesName: string, skinName?: string, textureAtlasName?: string, textureScale?: number): display.ArmatureDisplay;
        buildDragonBonesData(dragonBonesName: string, textureScale?: number): DragonBonesData;
        /**
         * - A global sound event manager.
         * Sound events can be listened to uniformly from the manager.
         * @version DragonBones 4.5
         * @language en_US
         */
        readonly soundEventManager: display.ArmatureDisplay;
    }
}
