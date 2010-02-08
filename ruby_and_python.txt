Ruby and Python
===============

Ruby and Python are awesome. You may disagree with __only one__ of those statements if
you use Ruby __or__ Python, but __not both__! And that is what brings us here. Two awesome languages.

But why two and not one ultimate risen lord among fallen creations? Because that is ridiculous.
There is room for love at this crowded table.

Superficial/Syntax (Also the last we will address the issue of whitespace)
==========================================================================

Python whitespace! Strangle me with your love!
----------------------------------------------
What is love? Is it restricting or freeing?
Some have said that love's nature is to bind oneself to another and that restriction does not
entirely require outside force but that love is a choice to give and the choice to put one's own
needs secondary. So it is with Python's whitespace.

Python loves you and the more you give yourself to her coils of white, space the sooner you will
gasp with cries of awesome as she surrounds you safely. She pays your bills and loves you so.

Seriously, there is something there about keeping your code structured in the natural logical heirarchy
you would put your code in anyway. So if you practice visually lining up your logic constructs you
won't even notice whitespace being an enforcement.

Ruby optional parens to method call
-----------------------------------
Ruby went crazy. Ruby done did it now. Paren-less method calls in Ruby look like the anti-climax
of the year to Python programmers (and even Javascript-ers).

    steve.boom     # just doesn't look right
    steve.boom()   # much better

    # extra credit
    steve.boom!    # rubyists know what I'm talking about
    steve.boom!()  # everybody wins?


Rubyists see :word and think comfort. Pythonistas read that backwards. Nothing against the colon.
Pythonistas love the colon. Pythonistas all the time the colon. In Ruby :words are
symbols off the symbol table, direct attribute access (@@@) of the global object. Symbols are kind
of cool when you think about how many things programs normally use strings for, even though the
string data structure itself if nothing like what you really need at that moment in your program.
You really need to just tell or ask the program something.

    object.respond_to?(:hi)

But, why, you ask are :symbols so commonly used in Ruby as Hash keys?

    obvious = { :example => "but you knew that" }

Because, if you think about it. It being our most common programming use-cases. We never really use
the key in a hash for anything other than access and storage. We throw away the key only to grab and
mutilate the variable, over and over again. Why do we need to build a string just for that? Rubyists
think and ask. Symbols are pretty awesome for this.

Aren't symbols just light-weight strings? Yes (@@@). A problem with that?


Philosophy
==========

Ruby: Go in and do it!
----------------------
Case studies:

"Monkey-patching": What is monkey-patching? Is that an insult or a compliment? I remember first
hearing the term "monkey-patching" used in derision at Google I/O 2009 when I was talking with
Guido Von Rossum and some young male attendees about Python and language-design. Somehow while we
were talking we got onto the subject of Ruby. I, an enthusiastic Rubyist at the time, attempted to
even-handedly report feature of the Ruby programming language that I love. The young male standing
next to me and proceeded to use the word "monkey-patching" in a clearly derisive manner. For anyone
who learns better from stories like that, good luck to you.

    - best monkey-patching examples
    - prevalence of /ext in many of modern Ruby source distributions

Python: Go in and do it!
------------------------
Case studies:
    - no privacy! what? I thought Python was the more rigid of the two

The Feel
--------


The Specifics
-------------

Delegation
==========
Ruby: method_missing
--------------------

    # idiomatic use of method_missing:
    # -------------------------------
    # Delegate other missing methods to response.
    def method_missing(name, *args, &block)
      if response && response.respond_to?(name)
        response.send(name, *args, &block)
      else
        super
      end
    end

    # Also check response since we delegate there.
    def respond_to?(symbol, include_private=false)
      super || (response && response.respond_to?(symbol, include_private))
    end

Python: __getattr__
-------------------

    class DynamicMethods:
        # __getattr__, like method_missing, is only called if no other attribute matches.
        # use __getattribute__ if you want to be called regardless of that.
        # http://pyref.infogami.com/__getattr__
        def __getattr__(self, name):
          # This would suffice for ordinary attributes
          print("getting attribute %s" % name)

          # But maybe you want it to be a function...
          # yes, inner functions are legal.
          # If you tried to do this in ruby, it would just define another instance method.
          def some_function(*args, **kwargs):
              # % is the string interpolation operator.  It behaves like sprintf in C.
              print("calling %s with %s and %s" % (name, repr(args), repr(kwargs)))
              # notice that I referred to 'name' in this scope?
              # Yeah, closures work pretty well in python.

          return some_function

        # This acts like getattribute: it always runs, regardless of your real attributes.
        # Careful not to create an infinite loop!
        # http://pyref.infogami.com/__setattr__
        def __setattr__(self, name, value):
            print("setting attribute %s to %s" % (name,value))
