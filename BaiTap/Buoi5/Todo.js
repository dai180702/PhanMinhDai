import React from "react";
import { List } from "react-native-paper";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../FirebaseConfig";
import { Alert } from "react-native";

function Todo({ id, title, complete }) {
  const [updating, setUpdating] = React.useState(false);

  async function toggleComplete() {
    try {
      setUpdating(true);
      const todoRef = doc(firestore, "todos", id);
      await updateDoc(todoRef, {
        complete: !complete,
        updatedAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error updating todo:", error);
      Alert.alert("Lỗi", "Không thể cập nhật trạng thái todo");
    } finally {
      setUpdating(false);
    }
  }

  return (
    <List.Item
      title={title}
      onPress={toggleComplete}
      disabled={updating}
      left={(props) => (
        <List.Icon
          {...props}
          icon={complete ? "check" : "cancel"}
          color={complete ? "green" : "red"}
        />
      )}
    />
  );
}

export default Todo;
