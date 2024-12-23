import { dbapi } from "@/utils/api/dbinstance";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export interface UpdateUserStatusPayload {
  userId: number;
  statusId: string;
}

export const updateUserStatus = async ({
  userId,
  statusId,
}: UpdateUserStatusPayload): Promise<void> => {
  await dbapi.put(`user/${userId}/status/${statusId}`);
};

export const useUpdateUserStatus = (
  options?: UseMutationOptions<void, Error, UpdateUserStatusPayload>
) => {
  return useMutation<void, Error, UpdateUserStatusPayload>({
    mutationFn: updateUserStatus,
    ...options,
  });
};
