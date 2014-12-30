#include <node.h>
#include <v8.h>

using namespace v8;

Handle<Value> Hello(const Arguments& args) {
    HandleScope scope;

    return scope.Close(String::New("world"));
}

void init(Handle<Object> exports) {
    exports->Set(String::NewSymbol("hello"),
        FunctionTemplate::New(Hello)->GetFunction());
}

NODE_MODULE(method, init);
