import React from "react";
import { FlatList, View, Alert } from "react-native";
import {
  Appbar,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native-paper";
import Todo from "./Todo";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../../FirebaseConfig";

function TodoScreen() {
  const [todo, setTodo] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [todos, setTodos] = React.useState([]);
  const [addingTodo, setAddingTodo] = React.useState(false);

  // Fetch todos khi component mount
  React.useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      Alert.alert("Lỗi", "Vui lòng đăng nhập để xem todos");
      return;
    }

    const q = query(
      collection(firestore, "todos"),
      where("userId", "==", user.uid)
    );

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          const { title, complete, createdAt } = doc.data();
          list.push({
            id: doc.id,
            title,
            complete,
            createdAt,
          });
        });
        // Sắp xếp todos theo thời gian tạo mới nhất
        list.sort((a, b) => b.createdAt - a.createdAt);
        setTodos(list);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching todos:", error);
        Alert.alert("Lỗi", "Không thể tải danh sách todos");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleAddTodo = async () => {
    if (!todo.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập nội dung todo");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      Alert.alert("Lỗi", "Vui lòng đăng nhập để thêm todo");
      return;
    }

    try {
      setAddingTodo(true);
      await addDoc(collection(firestore, "todos"), {
        title: todo.trim(),
        complete: false,
        userId: user.uid,
        createdAt: new Date().toISOString(),
      });
      setTodo("");
    } catch (error) {
      console.error("Error adding todo:", error);
      Alert.alert("Lỗi", "Không thể thêm todo");
    } finally {
      setAddingTodo(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ff6f00" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingTop: 32 }}>
      <Appbar>
        <Appbar.Content title={"TODOS List"} />
      </Appbar>
      <FlatList
        style={{ flex: 1 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo {...item} />}
      />
      <View style={{ padding: 16 }}>
        <TextInput
          label={"New Todo"}
          value={todo}
          onChangeText={setTodo}
          disabled={addingTodo}
        />
        <Button
          onPress={handleAddTodo}
          loading={addingTodo}
          disabled={addingTodo}
          style={{ marginTop: 8 }}
        >
          Add TODO
        </Button>
      </View>
    </View>
  );
}

export default TodoScreen;
