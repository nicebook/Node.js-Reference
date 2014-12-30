#include <node.h>
#include <v8.h>

using namespace v8;

void init(Handle<Object> exports) {

    exports->Set(String::NewSymbol("hello"), String::New("world"));
}

NODE_MODULE(module, init);
