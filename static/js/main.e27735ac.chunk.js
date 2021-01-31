




//Please don't read this code and bully me, I'm honestly ashamed of it lol.
//Most of this was created using the (I believe) React Transpiler after senguyen1011 wrote the original source.
//I, foolishly, editted the *transpiled* code, not only using a basically non-existent environment, but also without an efficient build/workflow setup.
//I.e. I "built" and tested the website using Github pages.  Meaning I literally comitted code PRIOR to testing it.
//Don't do this shit unless it's meant to be a bodge job like I did.
//And if you ever write a transpiler, please put some information about it before/after the code so others can realize this isn't just obfuscated source code like the dumbass I was.  


var t1 = 0;
var t2 = 0;
var t3 = 0;
var t4 = 0;
var t5 = 0;
var W1 = 0;
var W2 = 0;
var W3 = 0;
var W4 = 0;
var W5 = 0;
var C1 = 0;
var C2 = 0;
var C3 = 0;
var C4 = 0;
var C5 = 0;
//Told you this was a bodge job.

(this["webpackJsonpstate-purity"] = this["webpackJsonpstate-purity"] || []).push([
    [0], {
        13: function(e, t, a) {},
        14: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                s = a.n(n),
                i = a(7),
                o = a.n(i),
                c = a(5),
                r = a(1),
                l = a(2),
                m = a(4),
                h = a(3),
                d = (a(13), function() {
                    return s.a.createElement("div", {
                        className: "card brief"
                    }, s.a.createElement("div", {
                        className: "card-body text-center"
                    }, s.a.createElement("h4", {
                        className: "card-title"
                    }, "A weighted, \"Rice Purity\" based test, but for STEM!"), s.a.createElement("h5", {
                        className: "card-subtitle mb-2 text-muted"
                    }, "Have you ever..."), s.a.createElement("button", {
                        className: "btn btn-teal badge rounded-pill p-2 shadow-sm",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#description",
                        "aria-expanded": "false",
                        "aria-controls": "description"
                    }, s.a.createElement("svg", {
                        width: "1.4em",
                        height: "1.4em",
                        viewBox: "0 0 16 16",
                        className: "bi bi-question",
                        fill: "currentColor",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, s.a.createElement("path", {
                        d: "M5.25 6.033h1.32c0-.781.458-1.384 1.36-1.384.685 0 1.313.343 1.313 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.007.463h1.307v-.355c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.326 0-2.786.647-2.754 2.533zm1.562 5.516c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                    }))), s.a.createElement("div", {
                        className: "collapse mt-2",
                        id: "description"
                    }, s.a.createElement("div", {
                        className: "card card-body shadow-sm"
                    }, s.a.createElement("p", null, "Click on every item you've done. After submitting the test, a \"Purity Score\" will be calculated. A \"Classic Purity Score\" will be shown for reference, which is how much you've completed, unweighted. This test also includes weighted questions, which will be calculated in a weighted score, and different category questions.  Checking off severe offenses will lower your \"purity.\" thus increasing the score, quicker than checking off minor offenses."), s.a.createElement("p", {
                        className: "text-danger font-weight-bold"
                    }, "This is not a bucket list.", s.a.createElement("br", null), "Completion of all items will likely result in looking like an idiot savant.")))))
                }),
                w = [
                        {content: "Drawn an overly silly/bizzare/disturbing diagram?", weight: 1, type: 1},
                        {content: "Spelled something out with atomic symbols (No U)?", weight: 1, type: 1},
                        {content: "= e = pi?", weight: 1, type: 3},
                        {content: "Tried to explain where babies come from by describing cell cycles?", weight: 1, type: 1},
                        {content: "Made flat earther jokes?", weight: 1, type: 1},
                        {content: "Joined a flat earth community to argue?", weight: 1, type: 1},
                        {content: "Had an argument over popsci topics?", weight: 1, type: 1},
                        {content: "Had an argument over popsci topics with people <15 yo?", weight: 1, type: 1},
                        {content: "Read research papers on aerodynamics of anime t*ddies?", weight: 1, type: 1},
                        {content: "= g = pi^2?", weight: 1, type: 3},
                        {content: "Used Sci-Hub?", weight: 1, type: 1},
                        {content: "Realized/made someone realize you/they are adoped based on Mendelian patterns?", weight: 2, type: 1},
                        {content: "Read the “Reproduction” chapter in bio most eagerly?", weight: 1, type: 1},
                        {content: "Became a mild hypochondriac by reading?", weight: 1, type: 1},
                        {content: "Become fascinated/obssessed by diseases (especially images of)?", weight: 2, type: 1},
                        {content: "Gotten overly fascinated by getting your blood drawn?", weight: 1, type: 1},
                        {content: "Drastically missed the end-point of a titration?", weight: 1, type: 1},
                        {content: "Undergone electrophoresis on your own blood.", weight: 1, type: 1},
                        {content: "Used small angle approximation for an *insufficiently* small angle?", weight: 1, type: 1},
                        {content: "Forgot to balance your centrifuge?", weight: 1, type: 1},
                        {content: "Made a culture from a questionable source?", weight: 1, type: 1},
                        {content: "Forgot to change culture medium?", weight: 1, type: 1},
                        {content: "Bought a chemical without proper containers?", weight: 2, type: 1},
                        {content: "Obtained a chemical illegally?", weight: 4, type: 1},
                        {content: "Obtained over the legal limit of radioactive substancees?", weight: 4, type: 1},
                        {content: "Been visited by the FBI/Feds on some STEM concern?", weight: 5, type: 1},
                        {content: "Been convicted/arrested on some STEM concern?", weight: 8, type: 1},
                        {content: "Used the wrong tool/glassware/equipment for the wrong job?", weight: 1, type: 1},
                        {content: "Used the wrong tool/glassware/equipment for the wrong job dangerously?", weight: 3, type: 1},
                        {content: "Made a dangerous guesstimation?", weight: 3, type: 1},
                        {content: "Bullshitted lab data because you fucked up the procedure?", weight: 2, type: 1},
                        {content: "\"Made your own\" lab procedure?", weight: 1, type: 1},
                        {content: "Stolen laba data?", weight: 3, type: 1},
                        {content: "Been attracted to your lab partner?", weight: 1, type: 1},
                        {content: "Thought a late scientist was hot? (Cough Nikola Tesla)", weight: 1, type: 1},
                        {content: "Done something stupid in a lab trying to impress someone?", weight: 1, type: 1},
                        {content: "Messed up drawing hexagons (for say, benzene)?", weight: 1, type: 1},
                        {content: "Not worn safety glasses during a lab?", weight: 1, type: 1},
                        {content: "Spilled safe chemicals out of container by accident?", weight: 2, type: 1},
                        {content: "Spilled safe chemicals out of container on purpose?", weight: 1, type: 1},
                        {content: "Spilled abrasive chemicals out of container by accident?", weight: 3, type: 1},
                        {content: "Spilled abrasive chemicals out of container on purpose?", weight: 4, type: 1},
                        {content: "Messed abrasive chemicals on protective gear?", weight: 2, type: 1},
                        {content: "Messed abrasive chemicals on your skin?", weight: 3, type: 1},
                        {content: "Had to use an eye wash or shower station?", weight: 2, type: 1},
                        {content: "Used your mouth to pipette solutions", weight: 2, type: 1},
                        {content: "Tasted something in a beaker?", weight: 2, type: 1},
                        {content: "Taken too big of a sniff from a beaker?", weight: 2, type: 1},
                        {content: "Broken an empty beaker, tube, or other lab equipment?", weight: 2, type: 1},
                        {content: "Rubbed your eyes with a chemical?", weight: 3, type: 1},
                        {content: "Mistook a chemical for consumables/food?", weight: 4, type: 1},
                        {content: "Stole lab alcohol/drugs/chemicals for consumption?", weight: 3, type: 1},
                        {content: "Stole lethal/dangerous lab chemicals?", weight: 6, type: 1},
                        {content: "Started a non-conventional (chemical, electrical, etc) fire by accident?", weight: 3, type: 1},
                        {content: "Started a non-conventional fire on purpose?", weight: 2, type: 1},
                        {content: "Started a non-conventional fire on purpose in an unsafe way/illegally/etc?", weight: 4, type: 1},
                        {content: "Made something explode by accident?", weight: 3, type: 1},
                        {content: "Made something explode on purpose?", weight: 2, type: 1},
                        {content: "Made something explode on purpose in an unsafe way/illegally/etc?", weight: 5, type: 1},
                        {content: "Seriously contemplated/planned making [illegal] drugs in a lab?", weight: 1, type: 1},
                        {content: "Made [illegal] drugs in a lab?", weight: 2, type: 1},
                        {content: "Given something an unnecessary mutation/genetic modification purposefully?", weight: 7, type: 1},
                        {content: "Considered giving up and becoming a CS major?", weight: 2, type: 2},
                        {content: "Considered becoming even more of a CS sellout and being a quant? (Yes, you are being roasted CS majors)", weight: 3, type: 2},
                        {content: "Forgotten to eject your drive before removing?", weight: 1, type: 2},
                        {content: "Consistently removed your drive without ejecting?", weight: 2, type: 2},
                        {content: "Experienced corruption from removing a drive unsafely?", weight: 3, type: 2},
                        {content: "Experienced a filesystem corruption on a main drive?", weight: 5, type: 2},
                        {content: "Forgotten to save a project before exitting and lost work?", weight: 1, type: 2},
                        {content: "Forgotten to save a project before exitting and lost 1+ hours worth of work?", weight: 2, type: 2},
                        {content: "Forgotten to save a project before exitting and lost 3+ hours worth of work?", weight: 3, type: 2},
                        {content: "Had your computer lose power?", weight: 1, type: 2},
                        {content: "Had your computer lose power and lost work?", weight: 1, type: 2},
                        {content: "Had your computer lose power and lost 1+ hours worth of work?", weight: 2, type: 2},
                        {content: "Had your computer lose power and lost 3+ hours worth of work?", weight: 1, type: 2},
                        {content: "Written a Batch script?", weight: 1, type: 2},
                        {content: "Have you ever used a dual boot system of Mac & Windows without Linux?", weight: 3, type: 2},
                        {content: "Installed Windows Linux Subsystem without currently having Linux?", weight: 2, type: 2},
                        {content: "Used Notepad to write code?", weight: 1, type: 2},
                        {content: "Had your breakpoints exceed 10?", weight: 1, type: 2},
                        {content: "Had your breakpoints exceed 20?", weight: 2, type: 2},
                        {content: "Had your breakpoints exceed 50?!", weight: 3, type: 2},
                        {content: "Had your breakpoints exceed 100?!?!  Wtf?!?", weight: 4, type: 2},
                        {content: "Read source code until at least 5 am in the morning?  (Me writing this right now)", weight: 1, type: 2},
                        {content: "Whispered “What the fuck” while reading code?", weight: 1, type: 2},
                        {content: "Yelled while working with code?", weight: 2, type: 2},
                        {content: "Not used indents while writing a 300+ line  project?", weight: 2, type: 2},
                        {content: "Used spacebar instead of tabbing to indent?", weight: 3, type: 2},
                        {content: "Commented 0 times on a 300+ line project?", weight: 1, type: 2},
                        {content: "Commented 0 times on a 300+ line collaborative project?", weight: 2, type: 2},
                        {content: "Commented 0 times on a large, 3,000+ lines project?", weight: 2, type: 2},
                        {content: "Commented 0 times on a large, 3,000+ lines collaborative project?", weight: 3, type: 2},
                        {content: "Written code on one line?", weight: 2, type: 2},
                        {content: "Written a 300+ line project only using single character identifiers where possible?", weight: 3, type: 2},
                        {content: "Waited for a program to run for more than 3 hours?", weight: 1, type: 2},
                        {content: "Waited for a program to run for more than 6 hours?", weight: 2, type: 2},
                        {content: "Waited for a program to run for more than a day?", weight: 3, type: 2},
                        {content: "Waited for a program to run for more than a week?", weight: 4, type: 2},
                        {content: "Made a classic example of a recursive function (Ex: Factorial) without recursion?", weight: 1, type: 2},
                        {content: "Used technical equipment in a machine-hazardous manner?", weight: 1, type: 2},
                        {content: "Used technical equipment in a self-hazardous manner?", weight: 2, type: 2},
                        {content: "Used technical equipment in a hazardous manner to others? ", weight: 3, type: 2},
                        {content: "Hardcoded your homework to satisfy the autograder", weight: 1, type: 2},
                        {content: "Used someone else's code for a grade/similar intentions?", weight: 2, type: 2},
                        {content: "Pirated CAD software?", weight: 1, type: 3},
                        {content: "thought sin(x) = x?", weight: 1, type: 3},
                        {content: "Reversed the polarity of an electrical component?", weight: 1, type: 3},
                        {content: "Reversed the polarity of an electrical component and damaged something?", weight: 1, type: 3},
                        {content: "Used red wires for negative and black wires for positive?", weight: 3, type: 3},
                        {content: "Short circuited something?", weight: 2, type: 3},
                        {content: "Disintegrated a wire?", weight: 2, type: 3},
                        {content: "Been zapped?", weight: 1, type: 2},
                        {content: "Been electrocuted?", weight: 2, type: 3},
                        {content: "Been violently electrocuted?", weight: 3, type: 3},
                        {content: "Worked on hardware without a way to safely discharge electricity?", weight: 1, type: 3},
                        {content: "Damaged hardware from a discharge?", weight: 4, type: 3},
                        {content: "Destroyed a logic analyzer/oscilloscope", weight: 4, type: 3},
                        {content: "Melted PCB/equipment/components?", weight: 2, type: 3},
                        {content: "Burned your hand while soldering?", weight: 1, type: 3},
                        {content: "Burned your hand with a hot glue gun?", weight: 1, type: 3},
                        {content: "Soldered incorrectly and destroyed the circuit?", weight: 2, type: 3},
                        {content: "Started a fire by soldering?", weight: 2, type: 3},
                        {content: "Welded without a respirator?", weight: 1, type: 3},
                        {content: "Welded without safety apparel?", weight: 2, type: 3},
                        {content: "Welded without a hood?", weight: 3, type: 3},
                        {content: "Broken a gear train?", weight: 1, type: 3},
                        {content: "Pinched skin in a gear train?", weight: 1, type: 3},
                        {content: "Exhausted a motor in a gear train?", weight: 1, type: 3},
                        {content: "Been hit by a motor?", weight: 2, type: 3},
                        {content: "Been hit by an actuator/hydraulics?", weight: 2, type: 3},
                        {content: "Been hit by pneumatics?", weight: 3, type: 3},
                        {content: "Broken equipment by any of the above three?", weight: 2, type: 3},
                        {content: "Broken a bone by any of the above three?", weight: 3, type: 3},
                        {content: "Printed something phallic/inappropriate in a 3D printer?", weight: 2, type: 3},
                        {content: "Printed a weapon/weapon part with a 3D printer?", weight: 2, type: 3},
                        {content: "Programmed/Drawn dumb things into a graphing calculator?", weight: 1, type: 4},
                        {content: "Written 80085 on your calculator?", weight: 1, type: 4},
                        {content: "Had a calculator die on you?", weight: 1, type: 4},
                        {content: "Had a calculator die on you in the middle of a test?", weight: 2, type: 4},
                        {content: "Used a table of integrals?", weight: 1, type: 4},
                        {content: "Forgot \"+C\"?", weight: 1, type: 4},
                        {content: "Used gradient (the angle system)?", weight: 2, type: 4},
                        {content: "Used the wrong angle system?", weight: 1, type: 4},
                        {content: "Incorrectly answered the complement of the actual answer?", weight: 1, type: 4},
                        {content: "Forgot to consider 0 as a root of an equation?", weight: 1, type: 4},
                        {content: "Divided by 0 (be it by forgetting to restrict the domain or not)?", weight: 1, type: 4},
                        {content: "Proved a theorem true by running Wolfram Alpha/Desmos/etc?", weight: 1, type: 4},
                        {content: "Used \"Proof by definition\"", weight: 1, type: 4},
                        {content: "Derived theorems/equations in the middle of a test?", weight: 1, type: 4},
                        {content: "Pretended something is obvious to bullshit through a question?", weight: 2, type: 4},
                        {content: "Derived your own formula and got the problem correct?", weight: 2, type: 4},
                        {content: "Guessed a completely random answer (Not multiple choice) and gotten a question correct?", weight: 2, type: 4},
                        {content: "Used \"pRoOf iS lEfT aS aN eXeRcIsE fOr ThE rEaDeR\"", weight: 2, type: 4},
                        {content: "Used Desmos to \"cheat?\"", weight: 1, type: 4},
                        {content: "Used Wolfram Alpha to solve basic algebra?", weight: 1, type: 4},
                        {content: "Programmed a calculator going into an exam/quiz/etc?", weight: 2, type: 4},
                        {content: "Used L'Hôpital's rule to prove differentiability of an expression?", weight: 2, type: 4},
                        {content: "Written a quick script to do a calculation that would have taken the calculator app less time?", weight: 1, type: 4},
                        {content: "Mispronounced Euler? ", weight: 1, type: 4},
                        {content: "Mispronounced Euclid like \"oil-clid\"?", weight: 2, type: 4},
                        {content: "Thought 57 was prime?", weight: 1, type: 4},
                        {content: "Treated a non-tensor matrix like a tensor?", weight: 2, type: 4},
                        {content: "Used Leibinz notation manipulation where it's wrong to look algebraic?", weight: 3, type: 4},
                        {content: "Used Word/Google/etc equations instead of LaTeX in post-HS math?", weight: 1, type: 4},
                        {content: "Joked about humanitiy majors?", weight: 1, type: 5},
                        {content: "Dissed on humanity majors?", weight: 1, type: 5},
                        {content: "Considered becoming a business major?", weight: 1, type: 5},
                        {content: "Considered becoming a humanities major?", weight: 2, type: 5},
                        {content: "Bored a close friend/family member with STEM?", weight: 2, type: 5},
                        {content: "Referenced XKCD?", weight: 1, type: 5},
                        {content: "Cited XKCD?", weight: 2, type: 5},
                        {content: "Cited a meme?", weight: 3, type: 5},
                        {content: "Used \"poggers\" in a report?", weight: 4, type: 5},
                        {content: "Cited Wikipedia as a legitimate source?", weight: 1, type: 5},
                        {content: "Used Libgen?", weight: 1, type: 5},
                        {content: "Worshipped an author?", weight: 1, type: 5},
                        {content: "Had an email sent to you about something STEM related being a mess/disaster?", weight: 2, type: 5},
                        {content: "Turned in a corrupted PDF to get more time to finish something?", weight: 3, type: 5},
                        {content: "Used STEM-puns?", weight: 1, type: 5},
                        {content: "Used STEM-pun pick up lines?", weight: 2, type: 5},
                        {content: "Ranted about a humanities class?", weight: 1, type: 5},
                        {content: "Ranted about a humanities class in front of the teacher/prof/instructor?", weight: 1, type: 5},
                        {content: "Had a humanities teacher/prof/instruct rant about you?", weight: 1, type: 5},
                        {content: "Confidently written an incorrect answer in public?", weight: 1, type: 5}
                    ]
                var tweight = 0
                for (i = 0; i < w.length; i++) {
                    tweight = tweight + w[i].weight
                    a = w[i]
                    //Total each subject
                            if (a.type == 1) {
                                t1 = t1 + 1
                                W1 = W1 + a.weight
                            } else if (a.type == 2) {
                                t2 = t2 + 1
                                W2 = W2 + a.weight
                            } else if (a.type == 3) {
                                t3 = t3 + 1 
                                W3 = W3 + a.weight
                            } else if (a.type == 4) {
                                t4 = t4 + 1 
                                W4 = W4 + a.weight
                            } else if (a.type == 5) {
                                t5 = t5 + 1
                                W5 = W5 + a.weight
                            }
                }
            var u = function(e) {
                    return s.a.createElement("header", {
                        className: "fixed-top"
                    }, s.a.createElement("nav", {
                        className: "navbar navbar-light bg-blur text-center shadow-sm"
                    }, s.a.createElement("div", {
                        className: "container"
                    }, s.a.createElement("div", {
                        className: "row"
                    }, s.a.createElement("div", {
                        className: "col-lg-6 col-md-8 col-12 mx-auto"
                    }, s.a.createElement("div", {
                        className: "row"
                    }, s.a.createElement("h3", {
                        className: "font-weight-bolder"
                    }, "STEM Purity")), s.a.createElement("div", {
                        className: "row"
                    }, s.a.createElement("div", {
                        className: "col"
                    }, s.a.createElement("h5", null, e.count + '/' + w.length), s.a.createElement("h6", {
                        className: "text-muted"
                    }, "Questions Answered")), s.a.createElement("div", {
                        className: "col"
                    }, s.a.createElement("h5", null, (100 - e.count / w.length * 100).toFixed(1) + '%'), s.a.createElement("h6", {
                        className: "text-muted"
                    }, "Classic Purity")), s.a.createElement("div", {
                        className: "col"
                    }, s.a.createElement("h5", null, e.score + '/' + tweight), s.a.createElement("h6", {
                        className: "text-muted"
                    }, "Total Weighted Score"))))))))
                },
                g = function(e) {
                    Object(m.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        var e;
                        Object(r.a)(this, a);
                        for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++) s[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(s))).handleCheck = function(t, a) {
                            var n = a.content;
                            n = "?" === n ? "Sex number lol" : n.slice(0, -1), t.target.checked ? e.props.onCheck(a.weight, n, a.type) : e.props.onCheck(-1 * a.weight, n, -1 * a.type)
                        }, e
                    }
                    return Object(l.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return w.map((function(t, a) {
                                return s.a.createElement("label", {
                                    key: t.id,
                                    className: "list-group-item list-group-item-action d-flex align-items-center pl-2 shadow-sm"
                                }, s.a.createElement("span", {
                                    key: t.id,
                                    className: "question-number"
                                }, a + 1), s.a.createElement("input", {
                                    key: t.id,
                                    className: "form-check-input mr-3",
                                    type: "checkbox",
                                    value: t.weight,
                                    onChange: function(a) {
                                        return e.handleCheck(a, t)
                                    }
                                }), t.content)
                            }))
                        }
                    }]), a
                }(n.Component),
                p = function(e) {
                    return e.acts.length ? e.acts.map((function(e, t) {
                        return s.a.createElement("li", {
                            key: t,
                            className: "list-group-item shadow-sm"
                        }, e)
                    })) : s.a.createElement("li", {
                        className: "list-group-item shadow-sm text-center text-muted"
                    }, "No offenses in this subject.")
                },
                b = function(e) {
                    Object(m.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(r.a)(this, a), (n = t.call(this, e)).state = {
                            selectedNav: 1,
                            selectedList: n.props.a1
                        }, n
                    }
                    return Object(l.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.w1 + this.props.w2 + this.props.w3 + this.props.w4 + this.props.w5,
                                a = this.props.w1 / t * 100,
                                i = this.props.w2 / t * 100,
                                o = this.props.w3 / t * 100,
                                c = this.props.w4 / t * 100,
                                r = this.props.w5 / t * 100;
                            console.log("Test:", w.length, this.props.score, tweight, w.length - this.props.score / tweight * w.length)
                            return s.a.createElement("div", {
                                className: "card shadow-sm result"
                            }, s.a.createElement("div", {
                                className: "card-body"
                            }, s.a.createElement("div", {
                                className: "row text-center"
                            }, s.a.createElement("div", {
                                className: "col"
                            }, s.a.createElement("h2", null, (100 - this.props.score / tweight * 100).toFixed(1) + '%'), s.a.createElement("h6", {
                                className: "text-muted mb-0"
                            }, "Total Weighted Purity"))), s.a.createElement("hr", null), t > 0 && s.a.createElement("div", {
                                className: "progress mb-3"
                            }, s.a.createElement("div", {
                                className: "progress-bar bg-info",
                                style: {
                                    width: "".concat(a, "%")
                                }
                            }, a.toFixed(1), "%"), s.a.createElement("div", {
                                className: "progress-bar bg-primary",
                                style: {
                                    width: "".concat(i, "%")
                                }
                            }, i.toFixed(1), "%"), s.a.createElement("div", {
                                className: "progress-bar bg-success",
                                style: {
                                    width: "".concat(o, "%")
                                }
                            }, o.toFixed(1), "%"), s.a.createElement("div", {
                                className: "progress-bar bg-warning",
                                style: {
                                    width: "".concat(c, "%")
                                }
                            }, c.toFixed(1), "%"), s.a.createElement("div", {
                                className: "progress-bar bg-danger",
                                style: {
                                    width: "".concat(r, "%")
                                }
                            }, r.toFixed(1), "%")), s.a.createElement("div", {
                                className: "row text-center mb-2"
                            }, s.a.createElement("div", {
                                className: "col"
                            }, s.a.createElement("h4", null, C1 + '/' +W1 + '(' + (100 - (C1/W1*100).toFixed(1)) + '%)'), s.a.createElement("h6", {
                                className: "text-info mb-0"
                            }, "Science Offenses"), t > 0 && s.a.createElement("small", {
                                className: "text-muted font-weight-bold"
                            }, this.props.w1 + '/' +t1 + '(' + (this.props.w1/t1).toFixed(1) + "%" + ')' )), s.a.createElement("div", {
                                className: "col"
                            }, s.a.createElement("h4", null, C2 + '/' +W2 + '(' + (100 - (C2/W2*100).toFixed(1)) + '%)'), s.a.createElement("h6", {
                                className: "text-primary mb-0"
                            }, "Technology Offenses"), t > 0 && s.a.createElement("small", {
                                className: "text-muted font-weight-bold"
                            }, this.props.w2 + '/' +t2 + '(' + (this.props.w2/t2).toFixed(1) + "%" + ')' )), s.a.createElement("div", {
                                className: "col"
                            }, s.a.createElement("h4", null, C3 + '/' +W3 + '(' + (100 - (C3/W3*100).toFixed(1)) + '%)'), s.a.createElement("h6", {
                                className: "text-success mb-0"
                            }, "Engineering Offenses"), t > 0 && s.a.createElement("small", {
                                className: "text-muted font-weight-bold"
                            }, this.props.w3 + '/' +t3 + '(' + (this.props.w3/t3).toFixed(1) + "%" + ')' ))), s.a.createElement("div", {
                                className: "row text-center"
                            }, s.a.createElement("div", {
                                className: "col"
                            }, s.a.createElement("h4", null, C4 + '/' +W4 + '(' + (100 - (C4/W4*100).toFixed(1)) + '%)'), s.a.createElement("h6", {
                                className: "text-warning mb-0"
                            }, "Mathematic Offenses"), t > 0 && s.a.createElement("small", {
                                className: "text-muted font-weight-bold"
                            }, this.props.w4 + '/' +t4 + '(' + (this.props.w4/t4).toFixed(1) + "%" + ')' )), s.a.createElement("div", {
                                className: "col"
                            }, s.a.createElement("h4", null, C5 + '/' +W5 + '(' + (100 - (C5/W5*100).toFixed(1)) + '%)'), s.a.createElement("h6", {
                                className: "text-danger mb-0"
                            }, "Other Offenses"), t > 0 && s.a.createElement("small", {
                                className: "text-muted font-weight-bold"
                            }, this.props.w5 + '/' +t5 + '(' + (this.props.w5/t5).toFixed(1) + "%" + ')' ))), t > 0 && s.a.createElement(n.Fragment, null, s.a.createElement("hr", null), s.a.createElement("ul", {
                                className: "nav nav-pills nav-fill mb-3"
                            }, s.a.createElement("li", {
                                className: "nav-item"
                            }, s.a.createElement("btn", {
                                className: 1 === this.state.selectedNav ? "nav-link active bg-info" : "nav-link text-teal",
                                onClick: function() {
                                    return e.setState({
                                        selectedNav: 1,
                                        selectedList: e.props.a1
                                    })
                                }
                            }, "Science")), s.a.createElement("li", {
                                className: "nav-item"
                            }, s.a.createElement("btn", {
                                className: 2 === this.state.selectedNav ? "nav-link active bg-primary" : "nav-link text-teal",
                                onClick: function() {
                                    return e.setState({
                                        selectedNav: 2,
                                        selectedList: e.props.a2
                                    })
                                }
                            }, "Technology")), s.a.createElement("li", {
                                className: "nav-item"
                            }, s.a.createElement("btn", {
                                className: 3 === this.state.selectedNav ? "nav-link active bg-success" : "nav-link text-teal",
                                onClick: function() {
                                    return e.setState({
                                        selectedNav: 3,
                                        selectedList: e.props.a3
                                    })
                                }
                            }, "Engineering")), s.a.createElement("li", {
                                className: "nav-item"
                            }, s.a.createElement("btn", {
                                className: 4 === this.state.selectedNav ? "nav-link active bg-warning" : "nav-link text-teal",
                                onClick: function() {
                                    return e.setState({
                                        selectedNav: 4,
                                        selectedList: e.props.a4
                                    })
                                }
                            }, "Mathematics")), s.a.createElement("li", {
                                className: "nav-item"
                            }, s.a.createElement("btn", {
                                className: 5 === this.state.selectedNav ? "nav-link active bg-danger" : "nav-link text-teal",
                                onClick: function() {
                                    return e.setState({
                                        selectedNav: 5,
                                        selectedList: e.props.a5
                                    })
                                }
                            }, "Other"))), s.a.createElement(p, {
                                acts: this.state.selectedList
                            }))))
                        }
                    }]), a
                }(n.Component),
                v = function(e) {
                    Object(m.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        var e;
                        return Object(r.a)(this, a), (e = t.call(this)).updateScore = function(t, a, type) {
                            t = Number(t), e.setState({
                                score: e.state.score + t,
                                count: e.state.count + 1
                            });
                            var l = t
                            t = Number(type)
                            var n = t < 0,
                                s = 1;
                            switch (n && (t *= -1, s = -1), e.setState({
                                    count: e.state.count + s
                                }), t) {
                                case 1:
                                    C1 = C1 + s * Math.abs(l)
                                    e.setState({
                                        w1: e.state.w1 + s
                                    }), n ? e.setState({
                                        a1: e.state.a1.filter((function(e) {
                                            return e !== a
                                        }))
                                    }) : e.setState({
                                        a1: [].concat(Object(c.a)(e.state.a1), [a])
                                    });
                                    break;
                                case 2:
                                    C2 = C2 + s * Math.abs(l)
                                    e.setState({
                                        w2: e.state.w2 + s
                                    }), n ? e.setState({
                                        a2: e.state.a2.filter((function(e) {
                                            return e !== a
                                        }))
                                    }) : e.setState({
                                        a2: [].concat(Object(c.a)(e.state.a2), [a])
                                    });
                                    break;
                                case 3:
                                    C3 = C3 + s * Math.abs(l)
                                    e.setState({
                                        w3: e.state.w3 + s
                                    }), n ? e.setState({
                                        a3: e.state.a3.filter((function(e) {
                                            return e !== a
                                        }))
                                    }) : e.setState({
                                        a3: [].concat(Object(c.a)(e.state.a3), [a])
                                    });
                                    break;
                                case 4:
                                    C4 = C4 + s * Math.abs(l)
                                    e.setState({
                                        w4: e.state.w4 + s
                                    }), n ? e.setState({
                                        a4: e.state.a4.filter((function(e) {
                                            return e !== a
                                        }))
                                    }) : e.setState({
                                        a4: [].concat(Object(c.a)(e.state.a4), [a])
                                    });
                                    break;
                                case 5:
                                    C5 = C5 + s * Math.abs(l)
                                    e.setState({
                                        w5: e.state.w5 + s
                                    }), n ? e.setState({
                                        a5: e.state.a5.filter((function(e) {
                                            return e !== a
                                        }))
                                    }) : e.setState({
                                        a5: [].concat(Object(c.a)(e.state.a5), [a])
                                    })
                            console.log(C4, W4, C5, W5, s, l)
                            }
                        }, e.state = {
                            isComplete: !1,
                            score: 0,
                            count: 0,
                            w1: 0,
                            w2: 0,
                            w3: 0,
                            w4: 0,
                            w5: 0,
                            a1: [],
                            a2: [],
                            a3: [],
                            a4: [],
                            a5: []
                        }, e
                    }
                    return Object(l.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return s.a.createElement(n.Fragment, null, s.a.createElement(u, {
                                score: this.state.score,
                                count: this.state.count
                            }), s.a.createElement("main", null, s.a.createElement("div", {
                                className: "container"
                            }, s.a.createElement("div", {
                                className: "row"
                            }, s.a.createElement("div", {
                                className: "col-lg-6 col-md-8 col-12 mx-auto"
                            }, s.a.createElement(d, null), s.a.createElement("div", {
                                className: "card shadow-sm"
                            }, s.a.createElement("div", {
                                className: "card-body"
                            }, s.a.createElement(g, {
                                onCheck: this.updateScore
                            }), s.a.createElement("button", {
                                type: "submit",
                                className: "btn btn-block btn-outline-teal mt-4",
                                onClick: function() {
                                    return e.setState({
                                        isComplete: !0
                                    })
                                }
                            }, "See Results"))), this.state.isComplete && s.a.createElement(b, {
                                w1: this.state.w1,
                                w2: this.state.w2,
                                w3: this.state.w3,
                                w4: this.state.w4,
                                w5: this.state.w5,
                                a1: this.state.a1,
                                a2: this.state.a2,
                                a3: this.state.a3,
                                a4: this.state.a4,
                                a5: this.state.a5,
                                score: this.state.score
                            }))))), s.a.createElement("footer", null, s.a.createElement("div", {
                                class: "container text-center font-italic text-muted p-4"
                            }, "(Mostly) made by senguyen1011.", s.a.createElement("br", null), "Adapted by Thomas. Discord: Thomas#5400", s.a.createElement("br", null), s.a.createElement("a", {href: "https://discord.gg/ks7nkBvg5h"}, "Join our STEM Discord"))))
                        }
                    }]), a
                }(n.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            o.a.render(s.a.createElement(s.a.StrictMode, null, s.a.createElement(v, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        },
        8: function(e, t, a) {
            e.exports = a(14)
        }
    },
    [
        [8, 1, 2]
    ]
]);
