(self["webpackChunkvue2_vuetify2"]=self["webpackChunkvue2_vuetify2"]||[]).push([[7365],{3048:function(e){function n(e){const n={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",literal:"true false iota nil",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:n,illegal:/["']/}]}]}}e.exports=n},7140:function(e){function n(e){return{name:"Golo",keywords:{keyword:"println readln print import module function local return let var while for foreach times in case when match with break continue augment augmentation each find filter reduce if then else otherwise try catch finally raise throw orIfNull DynamicObject|10 DynamicVariable struct Observable map set vector list array",literal:"true false null"},contains:[e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"}]}}e.exports=n},8267:function(e){function n(e){return{name:"Gradle",case_insensitive:!0,keywords:{keyword:"task project allprojects subprojects artifacts buildscript configurations dependencies repositories sourceSets description delete from into include exclude source classpath destinationDir includes options sourceCompatibility targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant def abstract break case catch continue default do else extends final finally for if implements instanceof native new private protected public return static switch synchronized throw throws transient try volatile while strictfp package import false null super this true antlrtask checkstyle codenarc copy boolean byte char class double float int interface long short void compile runTime file fileTree abs any append asList asWritable call collect compareTo count div dump each eachByte eachFile eachLine every find findAll flatten getAt getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter newReader newWriter next plus pop power previous print println push putAt read readBytes readLines reverse reverseEach round size sort splitEachLine step subMap times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader withStream withWriter withWriterAppend write writeLine"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.REGEXP_MODE]}}e.exports=n},2175:function(e){function n(e){return e?"string"===typeof e?e:e.source:null}function t(e){return i("(?=",e,")")}function i(...e){const t=e.map((e=>n(e))).join("");return t}function a(e,n={}){return n.variants=e,n}function s(e){const n="[A-Za-z0-9_$]+",i=a([e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]})]),s={className:"regexp",begin:/~?\/[^\/\n]+\//,contains:[e.BACKSLASH_ESCAPE]},o=a([e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]),r=a([{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:"\\$/",end:"/\\$",relevance:10},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE],{className:"string"});return{name:"Groovy",keywords:{built_in:"this super",literal:"true false null",keyword:"byte short char int long boolean float double void def as in assert trait abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"},contains:[e.SHEBANG({binary:"groovy",relevance:10}),i,r,s,o,{className:"class",beginKeywords:"class interface trait enum",end:/\{/,illegal:":",contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{className:"meta",begin:"@[A-Za-z]+",relevance:0},{className:"attr",begin:n+"[ \t]*:",relevance:0},{begin:/\?/,end:/:/,relevance:0,contains:[i,r,s,o,"self"]},{className:"symbol",begin:"^[ \t]*"+t(n+":"),excludeBegin:!0,end:n+":",relevance:0}],illegal:/#|<\//}}e.exports=s},5268:function(e){function n(e){return{name:"HAML",case_insensitive:!0,contains:[{className:"meta",begin:"^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",relevance:10},e.COMMENT("^\\s*(!=#|=#|-#|/).*$",!1,{relevance:0}),{begin:"^\\s*(-|=|!=)(?!#)",starts:{end:"\\n",subLanguage:"ruby"}},{className:"tag",begin:"^\\s*%",contains:[{className:"selector-tag",begin:"\\w+"},{className:"selector-id",begin:"#[\\w-]+"},{className:"selector-class",begin:"\\.[\\w-]+"},{begin:/\{\s*/,end:/\s*\}/,contains:[{begin:":\\w+\\s*=>",end:",\\s+",returnBegin:!0,endsWithParent:!0,contains:[{className:"attr",begin:":\\w+"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"\\w+",relevance:0}]}]},{begin:"\\(\\s*",end:"\\s*\\)",excludeEnd:!0,contains:[{begin:"\\w+\\s*=",end:"\\s+",returnBegin:!0,endsWithParent:!0,contains:[{className:"attr",begin:"\\w+",relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"\\w+",relevance:0}]}]}]},{begin:"^\\s*[=~]\\s*"},{begin:/#\{/,starts:{end:/\}/,subLanguage:"ruby"}}]}}e.exports=n},3512:function(e){function n(e){return e?"string"===typeof e?e:e.source:null}function t(e){return a("(",e,")*")}function i(e){return a("(",e,")?")}function a(...e){const t=e.map((e=>n(e))).join("");return t}function s(...e){const t="("+e.map((e=>n(e))).join("|")+")";return t}function o(e){const n={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},o={literal:["true","false","undefined","null"]},r=/""|"[^"]+"/,l=/''|'[^']+'/,c=/\[\]|\[[^\]]+\]/,d=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,m=/(\.|\/)/,u=s(r,l,c,d),_=a(i(/\.|\.\/|\//),u,t(a(m,u))),g=a("(",c,"|",d,")(?==)"),f={begin:_,lexemes:/[\w.\/]+/},b=e.inherit(f,{keywords:o}),p={begin:/\(/,end:/\)/},E={className:"attr",begin:g,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,b,p]}}},w={begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},y={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,w,E,b,p],returnEnd:!0},N=e.inherit(f,{className:"name",keywords:n,starts:e.inherit(y,{end:/\)/})});p.contains=[N];const h=e.inherit(f,{keywords:n,className:"name",starts:e.inherit(y,{end:/\}\}/})}),M=e.inherit(f,{keywords:n,className:"name"}),O=e.inherit(f,{className:"name",keywords:n,starts:e.inherit(y,{end:/\}\}/})}),k={begin:/\\\{\{/,skip:!0},v={begin:/\\\\(?=\{\{)/,skip:!0};return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[k,v,e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[h],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[M]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[h]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[M]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[O]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[O]}]}}e.exports=o},6703:function(e){function n(e){const n={variants:[e.COMMENT("--","$"),e.COMMENT(/\{-/,/-\}/,{contains:["self"]})]},t={className:"meta",begin:/\{-#/,end:/#-\}/},i={className:"meta",begin:"^#",end:"$"},a={className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},s={begin:"\\(",end:"\\)",illegal:'"',contains:[t,i,{className:"type",begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},e.inherit(e.TITLE_MODE,{begin:"[_a-z][\\w']*"}),n]},o={begin:/\{/,end:/\}/,contains:s.contains};return{name:"Haskell",aliases:["hs"],keywords:"let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",contains:[{beginKeywords:"module",end:"where",keywords:"module where",contains:[s,n],illegal:"\\W\\.|;"},{begin:"\\bimport\\b",end:"$",keywords:"import qualified as hiding",contains:[s,n],illegal:"\\W\\.|;"},{className:"class",begin:"^(\\s*)?(class|instance)\\b",end:"where",keywords:"class family instance where",contains:[a,s,n]},{className:"class",begin:"\\b(data|(new)?type)\\b",end:"$",keywords:"data family type newtype deriving",contains:[t,a,s,o,n]},{beginKeywords:"default",end:"$",contains:[a,s,n]},{beginKeywords:"infix infixl infixr",end:"$",contains:[e.C_NUMBER_MODE,n]},{begin:"\\bforeign\\b",end:"$",keywords:"foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",contains:[a,e.QUOTE_STRING_MODE,n]},{className:"meta",begin:"#!\\/usr\\/bin\\/env runhaskell",end:"$"},t,i,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,a,e.inherit(e.TITLE_MODE,{begin:"^[_a-z][\\w']*"}),n,{begin:"->|<-"}]}}e.exports=n},429:function(e){function n(e){const n="Int Float String Bool Dynamic Void Array ";return{name:"Haxe",aliases:["hx"],keywords:{keyword:"break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while "+n,built_in:"trace this",literal:"true false null _"},contains:[{className:"string",begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE,{className:"subst",begin:"\\$\\{",end:"\\}"},{className:"subst",begin:"\\$",end:/\W\}/}]},e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{className:"meta",begin:"@:",end:"$"},{className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elseif end error"}},{className:"type",begin:":[ \t]*",end:"[^A-Za-z0-9_ \t\\->]",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:":[ \t]*",end:"\\W",excludeBegin:!0,excludeEnd:!0},{className:"type",begin:"new *",end:"\\W",excludeBegin:!0,excludeEnd:!0},{className:"class",beginKeywords:"enum",end:"\\{",contains:[e.TITLE_MODE]},{className:"class",beginKeywords:"abstract",end:"[\\{$]",contains:[{className:"type",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"type",begin:"from +",end:"\\W",excludeBegin:!0,excludeEnd:!0},{className:"type",begin:"to +",end:"\\W",excludeBegin:!0,excludeEnd:!0},e.TITLE_MODE],keywords:{keyword:"abstract from to"}},{className:"class",begin:"\\b(class|interface) +",end:"[\\{$]",excludeEnd:!0,keywords:"class interface",contains:[{className:"keyword",begin:"\\b(extends|implements) +",keywords:"extends implements",contains:[{className:"type",begin:e.IDENT_RE,relevance:0}]},e.TITLE_MODE]},{className:"function",beginKeywords:"function",end:"\\(",excludeEnd:!0,illegal:"\\S",contains:[e.TITLE_MODE]}],illegal:/<\//}}e.exports=n},793:function(e){function n(e){return{name:"HSP",case_insensitive:!0,keywords:{$pattern:/[\w._]+/,keyword:"goto gosub return break repeat loop continue wait await dim sdim foreach dimtype dup dupptr end stop newmod delmod mref run exgoto on mcall assert logmes newlab resume yield onexit onerror onkey onclick oncmd exist delete mkdir chdir dirlist bload bsave bcopy memfile if else poke wpoke lpoke getstr chdpm memexpand memcpy memset notesel noteadd notedel noteload notesave randomize noteunsel noteget split strrep setease button chgdisp exec dialog mmload mmplay mmstop mci pset pget syscolor mes print title pos circle cls font sysfont objsize picload color palcolor palette redraw width gsel gcopy gzoom gmode bmpsave hsvcolor getkey listbox chkbox combox input mesbox buffer screen bgscr mouse objsel groll line clrobj boxf objprm objmode stick grect grotate gsquare gradf objimage objskip objenable celload celdiv celput newcom querycom delcom cnvstow comres axobj winobj sendmsg comevent comevarg sarrayconv callfunc cnvwtos comevdisp libptr system hspstat hspver stat cnt err strsize looplev sublev iparam wparam lparam refstr refdval int rnd strlen length length2 length3 length4 vartype gettime peek wpeek lpeek varptr varuse noteinfo instr abs limit getease str strmid strf getpath strtrim sin cos tan atan sqrt double absf expf logf limitf powf geteasef mousex mousey mousew hwnd hinstance hdc ginfo objinfo dirinfo sysinfo thismod __hspver__ __hsp30__ __date__ __time__ __line__ __file__ _debug __hspdef__ and or xor not screen_normal screen_palette screen_hide screen_fixedsize screen_tool screen_frame gmode_gdi gmode_mem gmode_rgb0 gmode_alpha gmode_rgb0alpha gmode_add gmode_sub gmode_pixela ginfo_mx ginfo_my ginfo_act ginfo_sel ginfo_wx1 ginfo_wy1 ginfo_wx2 ginfo_wy2 ginfo_vx ginfo_vy ginfo_sizex ginfo_sizey ginfo_winx ginfo_winy ginfo_mesx ginfo_mesy ginfo_r ginfo_g ginfo_b ginfo_paluse ginfo_dispx ginfo_dispy ginfo_cx ginfo_cy ginfo_intid ginfo_newid ginfo_sx ginfo_sy objinfo_mode objinfo_bmscr objinfo_hwnd notemax notesize dir_cur dir_exe dir_win dir_sys dir_cmdline dir_desktop dir_mydoc dir_tv font_normal font_bold font_italic font_underline font_strikeout font_antialias objmode_normal objmode_guifont objmode_usefont gsquare_grad msgothic msmincho do until while wend for next _break _continue switch case default swbreak swend ddim ldim alloc m_pi rad2deg deg2rad ease_linear ease_quad_in ease_quad_out ease_quad_inout ease_cubic_in ease_cubic_out ease_cubic_inout ease_quartic_in ease_quartic_out ease_quartic_inout ease_bounce_in ease_bounce_out ease_bounce_inout ease_shake_in ease_shake_out ease_shake_inout ease_loop"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{className:"string",begin:/\{"/,end:/"\}/,contains:[e.BACKSLASH_ESCAPE]},e.COMMENT(";","$",{relevance:0}),{className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"addion cfunc cmd cmpopt comfunc const defcfunc deffunc define else endif enum epack func global if ifdef ifndef include modcfunc modfunc modinit modterm module pack packopt regcmd runtime undef usecom uselib"},contains:[e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),e.NUMBER_MODE,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"symbol",begin:"^\\*(\\w+|@)"},e.NUMBER_MODE,e.C_NUMBER_MODE]}}e.exports=n}}]);
//# sourceMappingURL=Template-f3845ee8.af544340.js.map