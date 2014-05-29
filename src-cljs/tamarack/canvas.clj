(ns tamarack.canvas)

(defmacro with-canvas [canvas & body]
  `(binding [*ctx* (.getContext ~canvas "2d")]
     ~@body))

(defmacro with-saved-context [& body]
  `(do
     (.save *ctx*)
     ~@body
     (.restore *ctx*)))

(defmacro with-translate [x y & body]
  `(with-saved-context
     (.translate *ctx* ~x ~y)
     ~@body))

(defmacro with-scale [x y & body]
  `(with-saved-context
     (.scale *ctx* ~x ~y)
     ~@body))

(defmacro with-props [styles & body]
  (let [fill-sym (gensym "fill")
        stroke-sym (gensym "stroke")
        begin-path-sym (gensym "begin-path")
        line-width-sym (gensym "line-width")
        line-dash-sym (gensym "line-dash")
        font-sym (gensym "font")]
    `(let [{~fill-sym :fill
            ~stroke-sym :stroke
            ~begin-path-sym :begin-path
            ~line-width-sym :line-width
            ~line-dash-sym :line-dash
            ~font-sym :font} ~styles]
       (with-saved-context
         (when ~fill-sym
           (set! (.-fillStyle *ctx*) ~fill-sym))
         (when ~stroke-sym
           (set! (.-strokeStyle *ctx*) ~stroke-sym))
         (when ~begin-path-sym
           (.beginPath *ctx*))
         (when ~line-width-sym
           (set! (.-lineWidth *ctx*) ~line-width-sym))
         (when ~line-dash-sym
           (.setLineDash *ctx* ~line-dash-sym))
         (when ~font-sym
           (set! (.-font *ctx*) ~font-sym))
         ~@body))))
