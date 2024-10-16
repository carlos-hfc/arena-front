import useWebSocket, { Options, ReadyState } from "react-use-websocket"

const baseURL = import.meta.env.VITE_WS_URL

export const useAppWebSocket = (path: string, options?: Options) => {
  const fullUrl = `${baseURL}${path}`

  const defaultOptions: Options = {
    shouldReconnect: _closeEvent => true,
    reconnectInterval: 3000,
    onError: event => console.error(event),
    ...options,
  }

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    fullUrl,
    defaultOptions,
  )

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState]

  return {
    sendMessage,
    lastMessage,
    connectionStatus,
  }
}
