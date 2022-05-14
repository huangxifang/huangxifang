# Map和string转换

## map转string

```go
import (
    "encoding/json"
    "fmt"
)
func MapToJson(param map[string]interface{}) string {
    //json转map
    dataType, _ := json.Marshal(param)
    dataString := string(dataType)
    return dataString
}
```

使用方法：

```go
var requestPrams = make(map[string]interface{})
 requestPrams["code"] = code
 data := MapToJson(requestPrams)
 fmt.Println("parmMap:", data)
```

## string转map

```go
import (
    "encoding/json"
    "fmt"
)
func JsonToMap(str string) map[string]interface{} {
    //map 转json
    var tempMap map[string]interface{}
    err := json.Unmarshal([]byte(str), &tempMap)
    if err != nil {
        panic(err)
    }
    return tempMap
}
```

使用方法：

```go
var requestPrams = "{\"code\":\"123456\"}"
 data := JsonToMap(requestPrams)
 fmt.Println("parmMap:", data)
```
