(self["webpackChunkvue2_vuetify2"]=self["webpackChunkvue2_vuetify2"]||[]).push([[3880],{5745:function(e){function t(e){return e?"string"===typeof e?e:e.source:null}function n(e){return a("(",e,")?")}function a(...e){const n=e.map((e=>t(e))).join("");return n}function r(e){const t=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),a="decltype\\(auto\\)",r="[a-zA-Z_]\\w*::",s="<[^<>]+>",i="("+a+"|"+n(r)+"[a-zA-Z_]\\w*"+n(s)+")",o={className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},c="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",l={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+c+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},d={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},u={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{"meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(l,{className:"meta-string"}),{className:"meta-string",begin:/<.*?>/},t,e.C_BLOCK_COMMENT_MODE]},_={className:"title",begin:n(r)+e.IDENT_RE,relevance:0},m=n(r)+e.IDENT_RE+"\\s*\\(",p={keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",literal:"true false nullptr NULL"},g=[u,o,t,e.C_BLOCK_COMMENT_MODE,d,l],f={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:p,contains:g.concat([{begin:/\(/,end:/\)/,keywords:p,contains:g.concat(["self"]),relevance:0}]),relevance:0},b={className:"function",begin:"("+i+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:p,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:a,keywords:p,relevance:0},{begin:m,returnBegin:!0,contains:[_],relevance:0},{className:"params",begin:/\(/,end:/\)/,keywords:p,relevance:0,contains:[t,e.C_BLOCK_COMMENT_MODE,l,d,o,{begin:/\(/,end:/\)/,keywords:p,relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,l,d,o]}]},o,t,e.C_BLOCK_COMMENT_MODE,u]};return{name:"C",aliases:["h"],keywords:p,disableAutodetect:!0,illegal:"</",contains:[].concat(f,b,g,[u,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",end:">",keywords:p,contains:["self",o]},{begin:e.IDENT_RE+"::",keywords:p},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:u,strings:l,keywords:p}}}e.exports=r},5041:function(e){function t(e){const t="div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var",n="false true",a=[e.C_LINE_COMMENT_MODE,e.COMMENT(/\{/,/\}/,{relevance:0}),e.COMMENT(/\(\*/,/\*\)/,{relevance:10})],r={className:"string",begin:/'/,end:/'/,contains:[{begin:/''/}]},s={className:"string",begin:/(#\d+)+/},i={className:"number",begin:"\\b\\d+(\\.\\d+)?(DT|D|T)",relevance:0},o={className:"string",begin:'"',end:'"'},c={className:"function",beginKeywords:"procedure",end:/[:;]/,keywords:"procedure|10",contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:t,contains:[r,s]}].concat(a)},l={className:"class",begin:"OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",returnBegin:!0,contains:[e.TITLE_MODE,c]};return{name:"C/AL",case_insensitive:!0,keywords:{keyword:t,literal:n},illegal:/\/\*/,contains:[r,s,i,o,e.NUMBER_MODE,l,c]}}e.exports=t},1446:function(e){function t(e){return{name:"Cap’n Proto",aliases:["capnp"],keywords:{keyword:"struct enum interface union group import using const annotation extends in of on as with from fixed",built_in:"Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List",literal:"true false"},contains:[e.QUOTE_STRING_MODE,e.NUMBER_MODE,e.HASH_COMMENT_MODE,{className:"meta",begin:/@0x[\w\d]{16};/,illegal:/\n/},{className:"symbol",begin:/@\d+\b/},{className:"class",beginKeywords:"struct enum",end:/\{/,illegal:/\n/,contains:[e.inherit(e.TITLE_MODE,{starts:{endsWithParent:!0,excludeEnd:!0}})]},{className:"class",beginKeywords:"interface",end:/\{/,illegal:/\n/,contains:[e.inherit(e.TITLE_MODE,{starts:{endsWithParent:!0,excludeEnd:!0}})]}]}}e.exports=t},1795:function(e){function t(e){const t="assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty",n="shared abstract formal default actual variable late native deprecated final sealed annotation suppressWarnings small",a="doc by license see throws tagged",r={className:"subst",excludeBegin:!0,excludeEnd:!0,begin:/``/,end:/``/,keywords:t,relevance:10},s=[{className:"string",begin:'"""',end:'"""',relevance:10},{className:"string",begin:'"',end:'"',contains:[r]},{className:"string",begin:"'",end:"'"},{className:"number",begin:"#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",relevance:0}];return r.contains=s,{name:"Ceylon",keywords:{keyword:t+" "+n,meta:a},illegal:"\\$[^01]|#[^0-9a-fA-F]",contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]}),{className:"meta",begin:'@[a-z]\\w*(?::"[^"]*")?'}].concat(s)}}e.exports=t},2280:function(e){function t(e){return{name:"Clean",aliases:["icl","dcl"],keywords:{keyword:"if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr",built_in:"Int Real Char Bool",literal:"True False"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,{begin:"->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>"}]}}e.exports=t},8791:function(e){function t(e){return{name:"Clojure REPL",contains:[{className:"meta",begin:/^([\w.-]+|\s*#_)?=>/,starts:{end:/$/,subLanguage:"clojure"}}]}}e.exports=t},6134:function(e){function t(e){const t="a-zA-Z_\\-!.?+*=<>&#'",n="["+t+"]["+t+"0-9/;:]*",a="def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",r={$pattern:n,"builtin-name":a+" cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},s="[-+]?\\d+(\\.\\d+)?",i={begin:n,relevance:0},o={className:"number",begin:s,relevance:0},c=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),l=e.COMMENT(";","$",{relevance:0}),d={className:"literal",begin:/\b(true|false|nil)\b/},u={begin:"[\\[\\{]",end:"[\\]\\}]"},_={className:"comment",begin:"\\^"+n},m=e.COMMENT("\\^\\{","\\}"),p={className:"symbol",begin:"[:]{1,2}"+n},g={begin:"\\(",end:"\\)"},f={endsWithParent:!0,relevance:0},b={keywords:r,className:"name",begin:n,relevance:0,starts:f},y=[g,c,_,m,l,p,u,o,d,i],h={beginKeywords:a,lexemes:n,end:'(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',contains:[{className:"title",begin:n,relevance:0,excludeEnd:!0,endsParent:!0}].concat(y)};return g.contains=[e.COMMENT("comment",""),h,b,f],f.contains=y,u.contains=y,m.contains=[u],{name:"Clojure",aliases:["clj"],illegal:/\S/,contains:[g,c,_,m,l,p,u,o,d]}}e.exports=t},1422:function(e){function t(e){return{name:"CMake",aliases:["cmake.in"],case_insensitive:!0,keywords:{keyword:"break cmake_host_system_information cmake_minimum_required cmake_parse_arguments cmake_policy configure_file continue elseif else endforeach endfunction endif endmacro endwhile execute_process file find_file find_library find_package find_path find_program foreach function get_cmake_property get_directory_property get_filename_component get_property if include include_guard list macro mark_as_advanced math message option return separate_arguments set_directory_properties set_property set site_name string unset variable_watch while add_compile_definitions add_compile_options add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_link_options add_subdirectory add_test aux_source_directory build_command create_test_sourcelist define_property enable_language enable_testing export fltk_wrap_ui get_source_file_property get_target_property get_test_property include_directories include_external_msproject include_regular_expression install link_directories link_libraries load_cache project qt_wrap_cpp qt_wrap_ui remove_definitions set_source_files_properties set_target_properties set_tests_properties source_group target_compile_definitions target_compile_features target_compile_options target_include_directories target_link_directories target_link_libraries target_link_options target_sources try_compile try_run ctest_build ctest_configure ctest_coverage ctest_empty_binary_directory ctest_memcheck ctest_read_custom_files ctest_run_script ctest_sleep ctest_start ctest_submit ctest_test ctest_update ctest_upload build_name exec_program export_library_dependencies install_files install_programs install_targets load_command make_directory output_required_files remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or not command policy target test exists is_newer_than is_directory is_symlink is_absolute matches less greater equal less_equal greater_equal strless strgreater strequal strless_equal strgreater_equal version_less version_greater version_equal version_less_equal version_greater_equal in_list defined"},contains:[{className:"variable",begin:/\$\{/,end:/\}/},e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE]}}e.exports=t},6691:function(e){const t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],a=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],r=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],s=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],i=["arguments","this","super","console","window","document","localStorage","module","global"],o=[].concat(s,i,a,r);function c(e){const a=["npm","print"],r=["yes","no","on","off"],s=["then","unless","until","loop","by","when","and","or","is","isnt","not"],i=["var","const","let","function","static"],c=e=>t=>!e.includes(t),l={keyword:t.concat(s).filter(c(i)),literal:n.concat(r),built_in:o.concat(a)},d="[A-Za-z$_][0-9A-Za-z$_]*",u={className:"subst",begin:/#\{/,end:/\}/,keywords:l},_=[e.BINARY_NUMBER_MODE,e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,u]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,u]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[u,e.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+d},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}];u.contains=_;const m=e.inherit(e.TITLE_MODE,{begin:d}),p="(\\(.*\\)\\s*)?\\B[-=]>",g={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(_)}]};return{name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:l,illegal:/\/\*/,contains:_.concat([e.COMMENT("###","###"),e.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+d+"\\s*=\\s*"+p,end:"[-=]>",returnBegin:!0,contains:[m,g]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:p,end:"[-=]>",returnBegin:!0,contains:[g]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[m]},m]},{begin:d+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}e.exports=c}}]);
//# sourceMappingURL=Template-7a40024a.a7a17cb4.js.map