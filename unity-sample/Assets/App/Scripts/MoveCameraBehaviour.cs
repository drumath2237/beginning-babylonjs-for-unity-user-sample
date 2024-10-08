using UnityEngine;

public class MoveCameraBehaviour : MonoBehaviour
{
    private const float MovingSpeed = 0.2f;

    private void Update()
    {
        if (Input.GetKey(KeyCode.RightArrow) || Input.GetKey(KeyCode.D))
        {
            transform.position += Vector3.right * MovingSpeed;
        }

        if (Input.GetKey(KeyCode.LeftArrow) || Input.GetKey(KeyCode.A))
        {
            transform.position += Vector3.left * MovingSpeed;
        }
    }
}