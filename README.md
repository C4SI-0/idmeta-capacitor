# idmeta-capacitor

Plugin

## Install

```bash
npm install idmeta-capacitor
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`startIdmetaFlow(...)`](#startidmetaflow)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### startIdmetaFlow(...)

```typescript
startIdmetaFlow(options: { flowId: string; userToken: string; }) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code>{ flowId: string; userToken: string; }</code> |

--------------------

</docgen-api>
