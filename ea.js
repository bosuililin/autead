/**
 * Handles the rendering logic for a specific tag type.
 * If the tag type equals 1, it checks if the type is a function component and 
 * if so, processes it accordingly. Otherwise, it returns the provided value.
 *
 * @param {Object} a - The object containing the tag and type properties.
 * @param {any} b - The value to return if the tag type is not 1.
 * @returns {any} - Processed value based on the tag type.
 */
if (1 === a.tag) {
    var c = a.type;
    if (ea(c)) return uh(a, c, b); // Processes function component type.
    return b; // Returns b if not a function component.
}

/**
 * Creates and initializes a new fiber node.
 *
 * @param {any} a - Additional argument used in Vf function.
 * @param {Object} b - Callback to be invoked.
 * @param {Object} c - The initial properties of the fiber.
 * @param {Object} d - The parent fiber node.
 * @param {number} e - Expiration time.
 * @param {boolean} f - Whether the update is synchronous.
 * @param {boolean} g - Whether the update is blocking.
 * @param {boolean} h - Whether to track lanes.
 * @param {boolean} k - Whether to include an effect list.
 * @param {boolean} m - Whether to use a priority level.
 * @returns {Object} - The newly created fiber node.
 */
function Xi(a, b, c, d, e, f, g, h, k, m) {
    a = Vf(c, d, true, a, e, f, g, h, k);
    a.context = Wi(null);
    c = a.current;
    d = Z();
    e = hb(c);
    f = Pa(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    eb(c, f, e);
    a.current.lanes = e;
    ic(a, e, d);
    ia(a, d);
    return a;
}

/**
 * Schedules an update for the given component and returns the lanes.
 *
 * @param {any} a - The new element to render.
 * @param {Object} b - The fiber node where the update is scheduled.
 * @param {any} c - The context for the update.
 * @param {Function} d - An optional callback to run after the update.
 * @returns {number} - The lanes assigned to this update.
 */
function Sd(a, b, c, d) {
    var e = b.current,
        f = Z(),
        g = hb(e);
    c = Wi(c);
    if (null === b.context) {
        b.context = c;
    } else {
        b.pendingContext = c;
    }
    b = Pa(f, g);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    if (null !== d) {
        b.callback = d;
    }
    a = eb(e, b, g);
    if (null !== a) {
        ya(a, e, g, f);
        sd(a, e, g);
    }
    return g;
}
