## 0.5.1

- Fix an error when trying to create text that contains chars that are not encoded in the given font ([#31](https://github.com/wwwtyro/candygraph/pull/31))

## 0.5.0

- Removed the memory management mechanics around `retain()`. All renderables are
  now retained by default. Renderables that go out of scope will be garbage
  collected, or one may call their associated `dispose()` functions to perform
  an immediate manual cleanup. ([#26](https://github.com/wwwtyro/candygraph/pull/26))
